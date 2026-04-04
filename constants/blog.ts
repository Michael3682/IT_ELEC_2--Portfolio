export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  overview: string;
  content: string;
  category: string[];
  date: string;
  year: string;
  month: string;
  day?: string;
  author: string;
}

export type BlogCategory = {
  slug: string;
  name: string;
  parent?: string;
}

export const BLOG_CATEGORIES = [
  {
    slug: "tech",
    name: "Technology"
  },
  {
    slug: "design",
    name: "Design"
  },
  {
    slug: "life",
    name: "Life"
  },
  {
    slug: "reactjs",
    name: "React.js",
    parent: "tech"
  },
  {
    slug: "nextjs",
    name: "Next.js",
    parent: "tech"
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    overview: "Learn the basics of Next.js and build your first app.",
    content: "Next.js is a React framework that gives you everything you need to build fast, production-ready web applications. It supports server-side rendering, static site generation, and API routes out of the box — meaning you don't have to configure a separate backend for simple data fetching. One of the biggest advantages of Next.js is its file-based routing system: just create a file inside the app or pages directory and it automatically becomes a route. Getting started is as simple as running npx create-next-app@latest, choosing your preferences, and you're up and running in minutes. As you grow more comfortable, you'll discover powerful features like middleware, image optimization, and incremental static regeneration that make scaling your app much easier.",
    category: ["tech", "nextjs"],
    date: "February 7, 2026",
    year: "2026",
    month: "february",
    day: "7",
    author: "Rigel Recurerdo"
  },
  {
    id: "2",
    slug: "react-hooks-deep-dive",
    title: "React Hooks Deep Dive",
    overview: "Understanding the useState, useEffect, and custom hooks.",
    content: "React Hooks changed everything when they were introduced in React 16.8. Before hooks, you had to use class components to manage state or lifecycle methods — now you can do all of that in a simple function component. useState lets you declare reactive variables that re-render the UI when they change. useEffect handles side effects like fetching data, setting up subscriptions, or interacting with the DOM — and its dependency array gives you fine control over when it runs. But the real power comes from custom hooks: by extracting stateful logic into a reusable function prefixed with 'use', you can share behavior across components without duplicating code. Understanding how to compose hooks well is one of the most important skills in modern React development.",
    category: ["tech", "reactjs"],
    date: "February 7, 2023",
    year: "2023",
    month: "february",
    day: "7",
    author: "Jinky Aguillar"
  },
  {
    id: "3",
    slug: "minimal-design-principles",
    title: "Minimal Design Principles",
    overview: "Introduction to Minimal Design Principles",
    content: "Minimalism in design isn't about making things look empty — it's about removing everything that doesn't serve a purpose. The core idea is that every element on a page should earn its place. This means generous white space, a limited color palette, clear typography hierarchy, and intentional use of contrast. When you strip away the noise, the things that matter become more visible and the user experience becomes more intuitive. Great minimal design feels effortless to navigate because the designer made all the hard decisions upfront. For web developers, embracing minimal design also has practical benefits: fewer elements mean faster load times, simpler CSS, and interfaces that scale better across screen sizes. Start by asking 'does this element help the user?' — if not, remove it.",
    category: ["tech", "design"],
    date: "February 7, 2026",
    year: "2026",
    month: "february",
    day: "7",
    author: "Angela Canas"
  },
  {
    id: "4",
    slug: "work-life-balance",
    title: "Work Life Balance",
    overview: "Tips for staying healthy while being a developer.",
    content: "Being a developer often means long hours in front of a screen, tight deadlines, and the constant pressure to keep up with a fast-moving industry. Without intentional boundaries, it's easy for work to bleed into every part of your life. Start with the basics: set a consistent end time for your workday and stick to it. Take real breaks — not just tab-switching to social media, but actually stepping away from your screen. Physical movement is especially important for developers since the job is almost entirely sedentary. Even a short walk after lunch can reset your focus significantly. Learn to separate your identity from your productivity — your worth isn't measured in commits or features shipped. Building sustainable habits early in your career will carry you much further than burning bright and burning out.",
    category: ["life"],
    date: "February 7, 2022",
    year: "2022",
    month: "february",
    day: "7",
    author: "Rey Inoc"
  },
  {
    id: "5",
    slug: "tailwindcss-tips-and-tricks",
    title: "TailwindCSS Tips and Tricks",
    overview: "Handy TailwindCSS techniques to speed up your styling workflow.",
    content: "TailwindCSS has become one of the most popular CSS frameworks because it lets you style directly in your markup without context-switching to a separate stylesheet. But beyond the basics, there are techniques that can dramatically speed up your workflow. Use the group and peer modifiers to style children based on parent or sibling state — perfect for hover effects and interactive components. The arbitrary value syntax like w-[327px] or bg-[#1a1a2e] gives you escape hatches when the default scale doesn't fit. Tailwind's @apply directive lets you extract repeated utility combinations into reusable classes when your JSX starts feeling cluttered. And don't overlook the config file — customizing your theme with brand colors, fonts, and spacing scales means you're always working within your design system. The more you learn the utility classes by heart, the faster you'll move.",
    category: ["tech", "css"],
    date: "March 10, 2026",
    year: "2026",
    month: "march",
    day: "10",
    author: "Rigel Recurerdo"
  },
  {
    id: "6",
    slug: "dealing-with-burnout",
    title: "Dealing with Burnout as a Developer",
    overview: "How to recognize burnout early and recover from it effectively.",
    content: "Burnout in the tech industry is more common than most people admit. It often doesn't hit all at once — it creeps in gradually through chronic stress, lack of sleep, and the feeling that no matter how much you do, it's never enough. Early warning signs include dreading work you used to enjoy, difficulty concentrating, increased irritability, and a sense of detachment from your work. Recovery starts with acknowledgment: burnout is not a personal failure, it's a signal that something in your environment or habits needs to change. Take time off if you can — real time off, not just working from a different location. Reconnect with why you got into development in the first place by working on a small personal project with zero pressure. Talk to someone you trust. And when you return, set clearer boundaries around your time and energy. Prevention is always better than recovery.",
    category: ["life"],
    date: "March 15, 2025",
    year: "2025",
    month: "march",
    day: "15",
    author: "Angela Canas"
  }
]

export function filterPosts(
  posts: BlogPost[],
  {
    category,
    year,
    month,
    day,
  }: {
    category?: string[]
    year?: string
    month?: string
    day?: string
  }
) {
  return posts.filter((post) => {
    if (category && !category.every((cat) => post.category.includes(cat))) {
      return false
    }

    if (year && post.year !== year) return false
    if (month && post.month !== month.toLowerCase()) return false
    if (day && post.day !== day) return false

    return true
  })
}

export function formatDateLabel(datePath: string[]) {
  const [year, month, day] = datePath

  if (day && month) {
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year}`
  }

  if (month) {
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`
  }

  return year
}