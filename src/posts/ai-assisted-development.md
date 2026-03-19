---
title: "AI-Assisted Development: Managing the World's Smartest Intern"
date: "2026-03-19"
tags: ["AI", "Engineering", "Productivity"]
excerpt: "Nine months into using AI as a development tool, I have opinions. It has come a long way — but it still needs an experienced engineer at the wheel."
---

# AI-Assisted Development: Managing the World's Smartest Intern

About nine months ago my boss came to me with a question. She had heard about something called "vibe coding" — a term coined by Andrej Karpathy, the AI researcher behind some of OpenAI and Tesla's most ambitious work. The idea was essentially this: lean into AI so fully that you stop thinking about the code and just... vibe with what it produces. She asked me to look into it.

I was skeptical. I'd seen enough hype cycles in 19 years to know that most of them look better in demos than in production. But I started experimenting. And nine months later, I have to say: this one is different. It's not magic, and it's not replacing engineers — but it has genuinely changed how I work.

## Early Days: More Headache Than Help

I won't sugarcoat the early experience. It was rough.

The first major pain point was context. AI tools are stateless by nature — they don't have a mental model of your codebase the way you do. Early on, I'd spend hours carefully prompting my way through a complex feature, only to have the AI clobber whole sections of working code on the next request. It didn't know what it had broken. It was confident it had helped.

The second major pain was front-end / back-end synchronization. You'd ask it to update an API endpoint and it would happily do so — without touching the client code that called it. Or vice versa. It had no concept of the contract between them. You'd ship something, hit a runtime error, and spend 20 minutes figuring out that the AI had quietly changed a field name on one side but not the other.

It was frustrating enough that I almost wrote the whole thing off.

## What It's Actually Good At

The tools got better, and I got smarter about how to use them. The key shift was treating AI as a fast, capable assistant that needs clear direction and skeptical review — not something that understands your system holistically.

Today I use it constantly for boilerplate and scaffolding, repetitive transformations, explaining unfamiliar code, and getting first drafts done quickly so I can focus on the 20% that requires real judgment. On a good day it feels like having a junior engineer who can type 10x faster than anyone alive and never gets tired.

## AI Drift

There's a phenomenon I've started calling AI drift, and I think it's one of the most underappreciated limitations of these tools.

AI models are trained on enormous amounts of code. That training produces a strong gravitational pull toward the median — toward the most common patterns, the most typical architectures, the most standard ways of solving problems. For average tasks, this is exactly what you want. Boilerplate data access APIs? No problem. Standard CRUD endpoints? Easy.

The further your project deviates from that median, the harder things get. The AI doesn't just struggle — it actively tries to pull you back.

Two examples. First: I recently had it reimplement some old code that had stopped working due to a deprecation. The new code was functional, but when I put it next to the original the difference was stark. My old code was well-structured and modular. The AI's version was rigid and intertwined. I tried prompting it to maintain the original structure — described the pattern, gave examples, asked explicitly. It couldn't do it consistently. There may be ways to get better adherence with more elaborate prompting, but it's not something you get out of the box.

Second: I once worked on a program that generates code. Meta-programming is inherently unusual, and the AI had no framework for distinguishing between code I had written and code the program produces at runtime. It would regularly try to edit the generated output as if it were source, flagging correct behavior as bugs and suggesting fixes that would have broken the generator entirely. Every prompt had to fight against the drift.

The practical implication: the more novel your problem, the more supervision AI requires. The parts of your codebase that are genuinely unusual — the clever solutions, the patterns that don't look like everything else — those still need a human.

## The Weird Assumptions

I want to be specific about something. When I say AI makes strange mistakes, I'm not talking about the kind a junior engineer might make. I'm talking about decisions that no human, at any experience level, would make.

A recent example: I asked an AI to change which menu options were available on a specific page of a website. A human engineer would immediately understand what that means — conditional logic in a shared component, showing or hiding items based on route. Instead, the AI created an entirely separate navbar with different styling. One page now looked like it belonged to a completely different website.

It took many rounds of prompting to get it to understand what I actually wanted. And what I wanted was obvious. Any engineer who has built a navigation component would have known instantly. The AI found a path to a literal interpretation of my words and took it, with complete confidence.

This happens less often than it used to, but it still happens. It's not wrong enough to fail — it just has the unmistakable feel of something that learned from documentation rather than experience.

## Where I Won't Use It

Security. Full stop.

I won't use AI to write authentication logic, encryption, session management, or anything that touches sensitive data. Not because it can't produce plausible-looking code in those areas — it absolutely can — but because "plausible-looking" is exactly the problem. Security vulnerabilities hide in edge cases and subtle assumptions. That's precisely where AI makes its most confident mistakes.

## The Intern Analogy

The best mental model I've found: AI is like managing the world's smartest intern.

Fast, eager, broad knowledge. Give them a well-defined task with clear constraints and they'll execute better and faster than almost anyone. But you can't hand them something ambiguous and walk away. You have to review their work, catch the weird assumptions, and know enough yourself to recognize when they've gone off the rails.

This is also why AI is most dangerous in the hands of someone who can't evaluate its output. A junior engineer using AI without guardrails will trust what looks correct. A senior engineer brings the pattern recognition and architectural intuition to direct it precisely and catch the mistakes before they compound. AI doesn't replace that judgment — it offloads the work that doesn't require it, freeing you to apply it where it matters.

## Nine Months In

The tools I was using nine months ago feel primitive compared to what's available now. It's moving faster than almost any technology I've watched develop in my career.

I don't know what this looks like in another nine months. But I know the engineers who figure out how to work with these tools effectively — who treat them as powerful assistants rather than autonomous agents — are going to have a real edge. And I know that experience still matters. Maybe more than ever.

Vibe coding is real. Just make sure someone experienced is doing the vibing.
