# LearnSpace — Student Dashboard

A futuristic student learning dashboard built with Next.js App Router, Tailwind CSS, Framer Motion, and Supabase.

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Supabase** for the PostgreSQL database

## Architecture Decisions

### Server / Client Split
- `CourseGrid` and `CourseList` are **Server Components** — they fetch data from Supabase before the page renders, so there's no loading flash for the initial data.
- `Sidebar`, `CourseCard`, `HeroTile`, `ActivityTile` are **Client Components** (`use client`) because they use Framer Motion animations which require the browser.

### Animations
- Staggered card entrance using `delay: index * 0.09`
- Spring physics on hover: `stiffness: 300, damping: 20`
- Sidebar active pill uses `layoutId` for smooth positional animation
- Progress bars animate from 0% to real value on mount

### Data Fetching
- Supabase is used
- api called

## Environment Variables
See `.env.example` for required variables.
