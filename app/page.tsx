import Posts from "./components/Posts";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Welcome to my blog 👋 &nbsp;
      <span className="whitespace-nowrap">
        I&apos;m <span className="font-bold">Sayf</span>.
      </span>
      </p>
      <Posts />
    </main>
  )
}
