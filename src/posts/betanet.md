---
title: Betanet - The Cost of Vibing
description: Caw, Ca-Sorry I cannot resume this conversation.
author: Cooper
date: 8-16-2025
published: true
chapters:
  - title: Introduction
    anchor: introduction
  - title: Betanet Spec Explosion
    anchor: spec-explosion
  - title: Lofty Betanet Goals
    anchor: goals
  - title: Impossible Requirements
    anchor: impossible-requirements
  - title: Contradictory Security
    anchor: contradictory-security
  - title: Buzzword Soup Architecture
    anchor: buzzword-soup
  - title: Obvious AI Patterns
    anchor: obvious-ai
  - title: Fundraising & Scam Claims
    anchor: fundraising-scam
  - title: Conclusions & Advice
    anchor: conclusion
---

<h1 id="introduction"> Introduction: The Dawn of Betanet Madness </h1>

I've had a strong opinion on "vibe-coding" since the dawn of its existence. It's sparked nothing but meaningless projects that achieve nothing while wasting resources that could have been used for many other tasks. Sadly, it would seem that there has been an evolution to this software development apocalypse. Something I thought no one would be stupid enough to do has happened.

<h2 id="spec-explosion"> Betanet Spec Explosion </h2>

The specification (spec) "betanet" has been blowing up on the more niche side of YouTube, more specifically the optimization / debloating of Windows side. The spec's creator made of the aforementioned tools and got quite popular by doing so. Sadly, as no one could have predicted, the application of using commonly Google-able knowledge doesn't apply to intricate and advanced cryptography.

<h2 id="goals"> Lofty Betanet Goals </h2>

Betanet attempts to layout instructions on how to implement a new anonymized networking protocol. It will do this by doing the following:

- **Replace the entire Internet** with a "fully decentralized, censorship-resistant network"
- **Implement multiple cryptographic primitives simultaneously** including SHA-256, ChaCha20-Poly1305, HKDF-SHA256, Ed25519, X25519, and mandatory post-quantum hybrid X25519-Kyber768 by 2027
- **Disguise all traffic as normal HTTPS browsing** by requiring exact TLS fingerprint mirroring of real websites, including mandatory pre-flight calibration to match JA3/JA4 signatures, ALPN order, and HTTP/2 settings within ±15% tolerance

<br>

In theory, this sounds good. To which I agree. Sadly, this spec was written mostly if not **entirely** by AI. There are obvious flaws inside of this text including but not limited to:

<h2 id="impossible-requirements"> Impossible Implementation Requirements </h2>

- Perfect TLS fingerprint mirroring: By the nature of TLS, creating an "exact" match of a TLS signature is at minimum practically impossible, at most fully impossible.
- Mandatory calibration: Requiring a calibration connection before every connection creates an easily detectable pattern that defeats the entire purpose of this protocol.

<h2 id="contradictory-security"> Contradictory Security </h2>

- Remove signatures by creating them: The spec's "cover connections" and timing requirements create an objectively more distinct signature than they try and hide.
- BeaconSet dependencies: BeaconSet relies on three external randomness sources: drand, NIST, Ethereum. If all three of these aren't available, there's a fallback which of course breaks the security model.

<h2 id="buzzword-soup"> Buzzword Soup Architecture </h2>

- Unnecessary complexity: Why are we using SCION + HTX + libp2p + Nym + cashu + Lightning + governance + more and more in a single protocol? Have we lost the plot?

<h2 id="obvious-ai"> Obvious AI Patterns </h2>

- Excessive em-dash usage: "Diffie–Hellman" instead of standard "Diffie-Hellman". Same with "X25519–Kyber768" instead of "X25519-Kyber768".
- Overly fancy symbols: Ligatures are heavily used throughout the paper including: en-dashes (–) where something like the HTTP RFC would use hyphens (-), inconsistent dash usage between sections, and math ligatures being used instead of normal >= in Computer Science.
- Highly pretentious formatting: "MUST", "SHALL", "PROHIBITED" (real RFCs use normal caps without bold formatting)
- Unicode characters like "‖" for concatenation instead of standard "||"

<h2 id="fundraising-scam"> Fundraising & Scam Claims </h2>

Despite all of this, the original creator had the great, outstanding, brilliant move of calling this **not** AI-generated. Hell, not even LLM assisted.

<br>

[https://www.youtube.com/watch?v=Jvi5TORux7g&t=841s](https://www.youtube.com/watch?v=Jvi5TORux7g&t=841s)

<br>

Even if you don't believe any harm has been done by the entirety of the aforementioned (which honestly, it's just a shitpost), here's where some real shooters get put on the court.

<br>

The user, "[eemmmmg](https://github.com/eemmmmg)" on GitHub posted to issue which can be found below. He details how this "development team" has raised **over $60,000** in USDC for a spec which was AI generated. Excuse me, but what?

<br>

[https://github.com/ravendevteam/alternet/issues/43#issuecomment-3190245999](https://github.com/ravendevteam/alternet/issues/43#issuecomment-3190245999)

<br>

If this project wasn't already giving you the AI generated *vibes*, then I hope this just turned some gears. $60 grand in a currency which can be frozen at any time by a centralized organization to create a platform whose entire purpose is to **PREVENT THIS FROM HAPPENING**. There is not **ONE** implementation which hasn't been vibe-coded cough

<br>

[https://github.com/ravendevteam/alternet/issues/43#issuecomment-3190245999](https://github.com/ravendevteam/alternet/issues/43#issuecomment-3190245999)

<br>

An icing on the cake of this scam is the lies of being sponsored by Proton. It's extremely funny how you can say, "Oh I didn't write this with AI" and, "This is going to be the next internet!" Meanwhile you don't even know that whatever you post on the internet is there, forever:

<br>

<center>

[![Before](betanet/before.png)](https://web.archive.org/web/20250815000029/https://ravendevteam.org/)
*[8/15/25] Before he saw he was shit on for lying about a proton sponsorship*

</center>

<br>

<center>

[![After](betanet/after.png)](https://web.archive.org/web/20250816085637/https://ravendevteam.org/)
*[8/16/25] After!*

</center>

<h2 id="conclusion"> Conclusions & Advice </h2>

The **kid** who started this project, being only 17, is showing me and my friend group how easily people can be swindled by projects like this. My goal by creating this is to show that before you invest any money into something, please ask at least one other person, "Should I invest in this?". I'm sure they'll be able to give you some reasonable advice.

<br>

In the end, I do think that this project is a scam. If it wasn't intentional, it's still a scam. The best advice I can give to this project is this: Delete it, please. I wish everyone who actually spent the time to read this an awesome day and to stay smart. Bye-bye 😗
