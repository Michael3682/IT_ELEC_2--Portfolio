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
    content: "Next.js is a framework that make it easy to build full-stack application.",
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
    content: "Lorem Ipsum...",
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
    content: "Lorem Ipsum...",
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
    content: "Lorem Ipsum...",
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
    content: "TailwindCSS is a utility-first CSS framework...",
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
    content: "Burnout is a common struggle in the tech industry...",
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