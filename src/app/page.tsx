import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center p-24 w-full text-xl">
      <div className="flex flex-row items-center justify-center mb-10 w-4xl">
        <Image
          src="/vds.jpeg"
          alt="Jaume Ivars"
          width={200}
          height={200}
          className="rounded-full aspect-square object-cover"
        />

        <div className="flex flex-col items-center justify-center ml-5">
          <h1 className="text-5xl font-bold text-center mt-5">
            Jaume Ivars Grimalt
          </h1>
          <desc className="text-3xl font-bold text-center mt-5">
            Computer Vision Engineer
          </desc>
        </div>
      </div>
      <div className="mb-8  w-4xl">
        <h2 className="my-2">For recuiters or corious people:</h2>
        <div className="flex flex-col p-5 rounded-xl border-gray-600 border-2 space-y-3 w-full">
          <Link className="hover:text-gray-400" href={"/about"}>{"Who is this guy?"}</Link>
          <Link className="hover:text-gray-400" href={"/skills"}>{"What are your skills?"}</Link>
          <Link className="hover:text-gray-400" href={"/projects"}>{"What projects have you done? What's Mycrospace?"}</Link>
          <Link className="hover:text-gray-400" href={"/work_experience"}>{"What's your work experience?"}</Link>
        </div>
      </div>
      <div className="mb-8  w-4xl">
      <h2 className="my-2">For everyone that wants to follow my path:</h2>
        <div className="flex flex-col p-5 rounded-xl border-gray-600 border-2 space-y-3">
          <Link className="hover:text-gray-400" href={"/learning_notes"}>{"Checkout my notes about Deep Learning, Maths and Biotech"}</Link>
          <Link className="hover:text-gray-400" href={"/learning_recomendations"}>{"Checkout cool books and papers that I recommend"}</Link>
        </div>
      </div>
    </div>
  )
}
