
import { useState, useEffect } from "react";
import { Briefcase, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface JobListing {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string;
  description: string;
}

const jobListings: JobListing[] = [
  {
    id: "1",
    title: "Delivery Partner",
    location: "Dharwad",
    department: "Operations",
    type: "Full-time",
    description: "Join our team as a delivery partner to deliver food orders to customers in the Dharwad area. Flexible hours and competitive pay."
  },
  {
    id: "2",
    title: "Restaurant Success Manager",
    location: "Dharwad",
    department: "Partner Relations",
    type: "Full-time",
    description: "Work with restaurant partners to ensure their success on the McBongu's platform. Manage relationships and help optimize their operations."
  },
  {
    id: "3",
    title: "Customer Support Specialist",
    location: "Remote",
    department: "Customer Support",
    type: "Full-time",
    description: "Provide excellent customer service to address customer queries, concerns, and issues through phone, email, and chat support."
  },
  {
    id: "4",
    title: "Software Developer",
    location: "Bangalore",
    department: "Engineering",
    type: "Full-time",
    description: "Develop and maintain our food delivery application using modern web technologies including React, Node.js, and AWS."
  },
  {
    id: "5",
    title: "Marketing Coordinator",
    location: "Dharwad",
    department: "Marketing",
    type: "Full-time",
    description: "Plan and execute marketing campaigns to boost customer acquisition and engagement in the Dharwad area."
  }
];

const Career = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState(jobListings);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (selectedDepartment === "All") {
      setFilteredJobs(jobListings);
    } else {
      setFilteredJobs(jobListings.filter(job => job.department === selectedDepartment));
    }
  }, [selectedDepartment]);

  const departments = ["All", ...Array.from(new Set(jobListings.map(job => job.department)))];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-mcbongu-50 to-mcbongu-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Be part of the mission to deliver delicious food to people across Dharwad. We're looking for passionate individuals to help us grow.
            </p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>
            
            {/* Department Filter */}
            <div className="mb-8 flex flex-wrap gap-2">
              {departments.map(department => (
                <Button
                  key={department}
                  variant={selectedDepartment === department ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(department)}
                  className={selectedDepartment === department ? "bg-mcbongu-500" : ""}
                >
                  {department}
                </Button>
              ))}
            </div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map(job => (
                <div key={job.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-mcbongu-100 text-mcbongu-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {job.department}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <p className="text-gray-600 mb-6 line-clamp-3">{job.description}</p>
                    <Button variant="outline" className="w-full justify-between">
                      Apply Now
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12 border border-gray-200 rounded-lg">
                <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600">
                  There are currently no open positions in this department.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Why Join McBongu's?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-mcbongu-100 text-mcbongu-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Develop your skills and advance your career with our training programs and growth pathways.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-mcbongu-100 text-mcbongu-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Inclusive Culture</h3>
                <p className="text-gray-600">
                  Join a diverse team that values different perspectives and fosters an inclusive environment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-mcbongu-100 text-mcbongu-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
                <p className="text-gray-600">
                  Enjoy competitive compensation, health benefits, and various perks as part of our team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
