import Posts from "./components/Posts";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="px-6 mx-auto">
      <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">Hi, I&apos;m <span className="font-bold">Sayf</span> 👋</h1>
      <p className="mt-4 mb-12 text-3xl text-center dark:text-white">
        Welcome to my blog  &nbsp; <br />
        <span className="text-lg prose text-gray-600 dark:text-gray-400">In my free time I like developing side projects, learning new things, and writing about them. <br /> This blog serves as a playground for me to experiment with ideas and share some of my findings.
        Have a good read!</span>
      </p>
      <hr />
      <Posts />
    </main>
  )
}
