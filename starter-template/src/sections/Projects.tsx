import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from 'next/image';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";


const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2023",
    title: "Question Answer Form",
    results: [
      { title: "Multiple Question types used" },
      { title: "Login/Signup encryption"},
      { title: "Admin/User view" },
    ],
    link: "https://github.com/MohtashamMurshid/QuestionAnswerForm",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2024",
    title: "Bone Fracture Classification",
    results: [
      { title: "used 3 diffrents CNN models" },
      { title: "Data Cleaning" },
      { title: "Greater than 90% Accuracy" },
    ],
    link: "https://github.com/MohtashamMurshid/BoneFractureClassification",
    image: lightSaasLandingPage,
  },
  {
    company: "",
    year: "2024",
    title: "Market Place in Flask",
    results: [
      { title: "User Authentication" },
      { title: "Buy/Sell items" },
      { title: "Budget System" },
    ],
    link: "https://github.com/MohtashamMurshid/MarketplaceInFlask",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24">
    <div className="container ">
    <SectionHeader eyebrow="Real-world Results" title = "Featured Projects" description= "These projects were my side projects while I am doing my Computer Science degree" />

      <div className="flex flex-col mt-10 md:mt-20  gap-20">
        {portfolioProjects.map(project =>(
          <div key={project.title} 
          className="bg-gray-800 rounded-3xl
          z-10 relative overflow-hidden 
          after:content-[''] after:absolute after:inset-0 
          after:outline-2 
          after:outline after:-outline-offset-2 after:rounded-3xl 
          after:z-0 after:outline-white/20 p-8 md:py-12 lg:px-16 lg:py-16"> 
          {/* Updated padding classes */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Fixed grid columns class */}
            <div className="lg:pr-16"> 
              {/* Added right padding on larger screens */}
              <div className="bg-gradient-to-r from-emerald-300 bg-clip-text text-transparent to-sky-400 inline-flex gap-2 uppercase text-sm font-bold">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
        
              <h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/5 mt-4"/>
        
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map(result =>(
                  <li className="flex gap-2 text-sm text-white/50 md:text-base" key={result.title}>
                    <CheckCircleIcon className="size-5 md:size-6"/>
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
        
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 relative z-10">
                  <span>View Code</span>
                  <ArrowUpRightIcon className="size-4"/>
                </button>
              </a>
            </div>
        
            <div className="mt-8 lg:mt-0"> 
              {/* Added margin-top only for smaller screens */}
              <Image src={project.image} alt={project.title} className="relative z-0 lg:absolute lg:h-full"/>
            </div>
          </div>
        </div>
        
        
        ))}
      </div>
    </div>
  </section>;
};
