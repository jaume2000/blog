import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 w-full    text-xs sm:text-sm md:text-lg">
      <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-10 w-full">
        <Image
          src="/vds.jpeg"
          alt="Jaume Ivars"
          width={200}
          height={200}
          className="rounded-full aspect-square object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
        />

        <div className="flex flex-col items-center justify-center md:ml-5 mt-4 md:mt-0">
          <h1 className="font-bold text-center">
            Jaume Ivars Grimalt
          </h1>
          <h3 className="description">
            Computer Vision Engineer
          </h3>
        </div>
      </div>
      <div className="main_selector">
        <h2 className="my-2">For recuiters or corious people:</h2>
        <div className="flex flex-col p-3 sm:p-5 rounded-xl border-gray-600 border-2 space-y-3 w-full">
          <Link className="hover:text-gray-400" href={"/about"}>{"Who is this guy?"}</Link>
          <Link className="hover:text-gray-400" href={"/skills"}>{"What are your skills?"}</Link>
          <Link className="hover:text-gray-400" href={"/projects"}>{"What projects have you done? What's Mycrospace?"}</Link>
          <Link className="hover:text-gray-400" href={"/work_experience"}>{"What's your work experience?"}</Link>
          <Link className="download-cv-gradient" href={"/cv"}>{"Download CV"}</Link>
        </div>
      </div>
      <div className="main_selector">
        <h2 className="my-2">For everyone that wants to follow my path:</h2>
        <div className="flex flex-col p-3 sm:p-5 rounded-xl border-gray-600 border-2 space-y-3 w-full">
          <Link className="hover:text-gray-400" href={"/learning_notes"}>{"Checkout my notes about Deep Learning, Maths and Biotech"}</Link>
          <Link className="hover:text-gray-400" href={"/learning_recomendations"}>{"Checkout cool books and papers that I recommend"}</Link>
          <Link className="hover:text-gray-400" href={"/blog"}>{"Read my blog"}</Link>
        </div>
      </div>
    </div>
  )
}