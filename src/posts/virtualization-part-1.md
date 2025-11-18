---
title: Virtualization - Where to start? (Part 1)
description: Designing a philosophy to work around.
author: Cooper
date: 11-17-2025
published: false
chapters:
---

<h1 id="introduction"> Introduction </h1>
This series of blog posts was also design for me to work with, meaning some techniques in here are used for nothing but the sole idea of obfuscation. In this first post, it'll be the discussion of design principals and trade-offs to each design. With that, let's jump right into it!

<h1 id="scope"> Scope Creep </h1>
One of my biggest hurdles when I have designed VM's was getting a good scope. Figuring out the scope of your project can be daunting; I've felt times where my scope was so large I've completely axed projects. Don't shy away from the idea of "impossibly" huge tasks, but instead welcome them. Make bite-sized tasks that you can accomplish to reward your brain and eventually reach your scope. For this VM the scope will be simple: "Design a VM that runs in a WASM context with heavy obfuscation techniques baked into every crumble". Let's break this down into bite sized pieces that we can use not only to design this project, but also for me to write around.

1. Design the core philisophy of data exchanges. Popular examples are register or stack machines. For this blog post I will be making a register machine, because why not ask a stack machine to emulate a register machine.
2. !RESUME HERE!