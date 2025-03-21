
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter } from "lucide-react";

interface SocialLinks {
  twitter: string;
  linkedin: string;
  github: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: SocialLinks;
}

const TeamMember = ({ name, role, image, bio, socials }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-center mb-4">
        <Avatar className="h-32 w-32 border-4 border-mcbongu-100">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
      </div>
      <h3 className="text-xl font-bold text-mcbongu-900">{name}</h3>
      <p className="text-mcbongu-500 font-medium mb-3">{role}</p>
      <p className="text-gray-600 mb-4">{bio}</p>
      <div className="flex justify-center space-x-4">
        <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
          <Twitter className="h-5 w-5" />
        </a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
          <Github className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
