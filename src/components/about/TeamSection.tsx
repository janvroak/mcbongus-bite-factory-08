
import TeamMember from "@/components/about/TeamMember";

interface SocialLinks {
  twitter: string;
  linkedin: string;
  github: string;
}

interface TeamMemberData {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: SocialLinks;
}

const TeamSection = () => {
  const team: TeamMemberData[] = [
    {
      name: "P Aneesh",
      role: "Co-Founder & CEO",
      image: "https://i.pinimg.com/736x/82/2e/1c/822e1cae2d10fdda55f8d5f9d69f961a.jpg",
      bio: "Visionary leader who conceptualized McBongu's to revolutionize food delivery.",
      socials: {
        twitter: "https://twitter.com/paneesh",
        linkedin: "https://linkedin.com/in/paneesh",
        github: "https://github.com/paneesh"
      }
    },
    {
      name: "Janaki Ram",
      role: "Co-Founder & CTO",
      image: "https://dthezntil550i.cloudfront.net/46/latest/462102280835308190019254118/1280_960/09d3488f-2177-48d8-8347-09ce381d06a5.jpg",
      bio: "Tech innovator who built the platform's architecture from the ground up.",
      socials: {
        twitter: "https://twitter.com/janakiram",
        linkedin: "https://linkedin.com/in/janakiram",
        github: "https://github.com/janakiram"
      }
    },
    {
      name: "Rithwik M",
      role: "Co-Founder & COO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhtqzmMEsVVRu3OzOP1hB6sSsmYFWboblXA&s",
      bio: "Operations expert who ensures seamless delivery experiences every time.",
      socials: {
        twitter: "https://twitter.com/rithwikm",
        linkedin: "https://linkedin.com/in/rithwikm",
        github: "https://github.com/rithwikm"
      }
    },
    {
      name: "Rishik N",
      role: "Co-Founder & CMO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwfkAYANokWTBbrKtFKVlsho3dgK-CWAq_w&s",
      bio: "Marketing genius who built the McBongu's brand and customer acquisition strategy.",
      socials: {
        twitter: "https://twitter.com/rishikn",
        linkedin: "https://linkedin.com/in/rishikn",
        github: "https://github.com/rishikn"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-mcbongu-900 mb-4">Meet Our Founders</h2>
        <p className="text-lg text-gray-700 mb-16 max-w-3xl mx-auto">
          Our diverse team of innovators who came together with one shared vision: to revolutionize food delivery.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
