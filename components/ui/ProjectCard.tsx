import React from "react";
import Button from "./Button";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: any;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  href
}) => {
  return (
    <div className="md:w-[30vw] w-full bg-shadeblue rounded-xl border-t-[4px] border-lightpurple p-4 py-6 gap-5 flex justify-between">
      {/* Icon */}
      <div>{icon}</div>
      {/* Text */}
      <div className="flex flex-col justify-between gap-2">
        <h1 className="text-lg font-medium text-white tracking-tight">
          {title}
        </h1>
        <p className="text-zinc-400 text-sm font-light">{description}</p>
        <Link href={href}>
          <Button text="Browse project" secondary />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
