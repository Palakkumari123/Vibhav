import { useEffect, useState } from "react";
import ProjectCard, {
  SkeletonProjectCard,
} from "../../../Components/UI/cards/ProjectCard/ProjectCard";
import projects from "../../../data/Projects.json";
import Layout from "../../../Components/UI/Layout";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    setProjectList(projects["IoT"]);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <Layout>
    <div className="">
    <div className="fixed bottom-0 top-0 left-0 w-full  bg-black/50 pointer-events-none z-[-1]"></div>
      <video
        src="/Assets/backvd.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      />
    
      {/* <img src="/Assets/background3.png" className="fixed h-screen w-screen z-[-1]  "/> */}
      <div className="pt-32  bg-black/50 text-center z-50 font-batman">
      <div className="sm:text-5xl text-3xl text-white text-center font-extrabold mb-10 z-50 font-batman">
            Projects
          </div>
          <span className="sm:text-3xl text-2xl text-white text-center  font-chakraBold z-50">
            IOT
          </span>
        <div className="container mx-auto  p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-5 ">
          {loading
            ? Array.from({ length: projectList.length || 6 }).map(
                (projectSkelatol, index) => (
                  <SkeletonProjectCard key={index} />
                )
              )
            : projectList.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default Page;
