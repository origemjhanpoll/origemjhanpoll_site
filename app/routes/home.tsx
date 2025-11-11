import ProfileCard from "~/components/profile_card";
import SocialLinks from "~/components/social_links";
import { FaInstagram, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import MainBanner from "~/components/main_banner";
import Projects from "~/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen gap-4 p-4">
      <div className="flex flex-col w-full lg:w-100 gap-y-4">
        <ProfileCard
          username={"origemjhanpoll"}
          name={"Origem Jhanpoll"}
          role={"Developer"}
          description={"Passionate developer with a love for creating innovative solutions."}
          age={28}
          tags={["JavaScript", "TypeScript", "React", "Node.js"]}
          photoUrl={"https://framerusercontent.com/images/PVRe5xa6b75JHWq2R6KN2cO8z0.png"}
        />
        <SocialLinks
          icons={[
            { icon: <FaYoutube />, href: "#", label: "YouTube" },
            { icon: <FaInstagram />, href: "#", label: "Instagram" },
            { icon: <FaTiktok />, href: "#", label: "TikTok" },
            { icon: <FaXTwitter />, href: "#", label: "X (Twitter)" },
            { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
          ]} />
      </div>
      <div className="hidden flex-1 lg:flex">
        <MainBanner url={"https://images.pexels.com/photos/2842827/pexels-photo-2842827.jpeg"} />
      </div>
      <div className="flex flex-col w-full lg:w-100 gap-y-4">
        <SocialLinks
          icons={[
            { icon: <FaYoutube />, href: "#", label: "YouTube" },
            { icon: <FaInstagram />, href: "#", label: "Instagram" },
            { icon: <FaTiktok />, href: "#", label: "TikTok" },
            { icon: <FaXTwitter />, href: "#", label: "X (Twitter)" },
            { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
          ]} />
        <Projects
          projects={[
            {
              title: "My Awesome App",
              description: "A full-stack application built with React and Node.js",
              tags: ["React", "Node.js", "MongoDB"],
              githubUrl: "https://github.com/user/repo",
              liveUrl: "https://demo.com",
              imageUrl: "https://images.pexels.com/photos/34468507/pexels-photo-34468507.jpeg",

            },
            {
              title: "My Awesome App",
              description: "A full-stack application built with React and Node.js",
              tags: ["React", "Node.js", "MongoDB"],
              githubUrl: "https://github.com/user/repo",
              liveUrl: "https://demo.com",
              imageUrl: "https://images.pexels.com/photos/34468507/pexels-photo-34468507.jpeg",

            },
            {
              title: "My Awesome App",
              description: "A full-stack application built with React and Node.js",
              tags: ["React", "Node.js", "MongoDB"],
              githubUrl: "https://github.com/user/repo",
              liveUrl: "https://demo.com",
              imageUrl: "https://images.pexels.com/photos/34468507/pexels-photo-34468507.jpeg",

            },
          ]}
        />
      </div>
    </div>
  );
}
