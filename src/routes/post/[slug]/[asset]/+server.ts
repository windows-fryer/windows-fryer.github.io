import { error, type RequestHandler } from "@sveltejs/kit";
import { readFile } from "node:fs/promises";
import { extname, relative, resolve } from "node:path";

const MIME_TYPES = new Map<string, string>([
	[".png", "image/png"],
	[".jpg", "image/jpeg"],
	[".jpeg", "image/jpeg"],
	[".gif", "image/gif"],
	[".webp", "image/webp"],
	[".svg", "image/svg+xml"],
	[".ico", "image/x-icon"],
	[".avif", "image/avif"],
	[".bmp", "image/bmp"],
	[".txt", "text/plain; charset=utf-8"],
	[".json", "application/json"],
	[".pdf", "application/pdf"]
]);

const BASE_PATH = resolve("src", "lib", "assets", "posts");

const validatePath = (slug: string | undefined, asset: string | undefined) => {
	const safeSlug = slug?.trim();
	const safeAsset = asset?.trim();
	if (!safeSlug || !safeAsset) throw error(400, "Invalid asset path");
	const filePath = resolve(BASE_PATH, safeSlug, safeAsset);
	if (relative(BASE_PATH, filePath).startsWith("..")) throw error(400, "Invalid asset path");
	return filePath;
};

const readAsset = async (filePath: string) => {
	try {
		return await readFile(filePath);
	} catch (err) {
		if (isNodeError(err) && err.code === "ENOENT") throw error(404, "Asset not found");
		throw error(500, "Unable to read asset");
	}
};

const isNodeError = (err: unknown): err is NodeJS.ErrnoException =>
	typeof err === "object" && err !== null && "code" in err && typeof (err as { code?: unknown }).code === "string";

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	const filePath = validatePath(params.slug, params.asset);
	const file = await readAsset(filePath);
	const mimeType = MIME_TYPES.get(extname(filePath).toLowerCase()) ?? "application/octet-stream";
	return new Response(new Uint8Array(file), {
		headers: {
			"Content-Type": mimeType,
			"Cache-Control": "public, max-age=31536000, immutable"
		}
	});
};

