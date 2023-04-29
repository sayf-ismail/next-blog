import Image from "next/image"
// nextjs will help images by: lazy-loading when it is not part of the page
// need to add an attribute to the image file as we use the nextjs image vs the traditional html image tag

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/syftr-profile-pic.png"
        width={200}
        height={200}
        alt="Syftr Teddy"
        priority={true}
      />
    </section>
  )
}