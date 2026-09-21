# 📚 Book Vibe

Book Vibe is a book discovery and tracking app built with Next.js. Browse books, mark them as read or add them to your wishlist, sort and filter your collection, and visualize your reading stats with charts.

**Live demo:** [book-vibe-git-main-nafismahamudshahin.vercel.app](https://book-vibe-git-main-nafismahamudshahin.vercel.app)

## Features

- **Browse books** — a home page hero section plus a grid of book cards pulled from a remote API
- **Book details** — a dedicated page per book with full info (author, rating, pages, publisher, tags, etc.)
- **Read & Wishlist tracking** — mark a book as read or add it to your wishlist, managed via shared React context
- **Listed books view** — tabbed view of your read books and wishlist, sortable by rating, year, or page count
- **Reading stats chart** — a bar chart (via Recharts) visualizing pages read across your books
- **Auth pages** — login and sign-up UI (frontend scaffolding)
- **Toast notifications** — user feedback via react-toastify
- **Responsive UI** — styled with Tailwind CSS and daisyUI components

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) + [daisyUI](https://daisyui.com)
- [Recharts](https://recharts.org) for data visualization
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications
- [ESLint](https://eslint.org) for linting

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page — hero + featured books
│   ├── books/
│   │   ├── page.tsx              # All books listing
│   │   └── [id]/page.tsx         # Single book detail page
│   ├── read-books/page.tsx       # Reading stats (bar chart)
│   ├── listed-books/page.tsx     # Read books & wishlist (tabbed, sortable)
│   ├── login/page.tsx            # Login page
│   ├── sign-up/page.tsx          # Sign-up page
│   └── layout.tsx                # Root layout, providers, navbar/footer
├── components/                   # Reusable UI components (BookCard, Navbar, Footer, etc.)
├── context/
│   └── booksContext.tsx          # Shared state for read books & wishlist
├── types/
│   └── books.type.tsx            # IBook TypeScript interface
└── assets/                       # Images and icons

public/
└── booksData.json                # Sample book data
```

## Getting Started

### Prerequisites

- Node.js 18.18+ (or a compatible runtime)
- npm (or yarn / pnpm / bun)

### Installation

```bash
git clone https://github.com/nafismahamudshahin/book-vibe.git
cd book-vibe
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app. Pages auto-update as you edit files under `src/app`.

### Build & Run in Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Deployment

The easiest way to deploy this app is via [Vercel](https://vercel.com/new), the platform from the creators of Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.

## Author

**Nafis Mahamud Shahin**
GitHub: [@nafismahamudshahin](https://github.com/nafismahamudshahin)
Portfolio: [nafismahamudshahin.github.io](https://nafismahamudshahin.github.io)
