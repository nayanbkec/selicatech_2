import React, { useState } from 'react';
import { openPositions } from '../../data/careers';
import { Search, MapPin, Briefcase, Filter } from 'lucide-react';

const JobListings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Get unique departments
  const departments = [...new Set(openPositions.map(job => job.department))];
  
  // Get unique locations
  const locations = [...new Set(openPositions.map(job => job.location))];

  // Filter jobs based on search and filters
  const filteredJobs = openPositions.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === '' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === '' || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white 
                          placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 
                          focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>
          
          {/* Department Filter */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Briefcase size={18} className="text-gray-400" />
              </div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white 
                          focus:outline-none focus:ring-2 focus:ring-primary-500 
                          focus:border-primary-500 sm:text-sm"
              >
                <option value="">All Departments</option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Location Filter */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin size={18} className="text-gray-400" />
              </div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white 
                          focus:outline-none focus:ring-2 focus:ring-primary-500 
                          focus:border-primary-500 sm:text-sm"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-500">No job positions match your search criteria.</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">{job.title}</h3>
                  <div className="flex flex-wrap mt-2 mb-4 md:mb-0 gap-3">
                    <span className="inline-flex items-center text-sm text-gray-600">
                      <Briefcase size={16} className="mr-1" />
                      {job.department}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-600">
                      <MapPin size={16} className="mr-1" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center text-sm bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                      {job.type}
                    </span>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle apply action
                    alert(`Apply for ${job.title}`);
                  }}
                >
                  Apply Now
                </a>
              </div>
              <p className="mt-4 text-gray-600">{job.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                Posted on: {job.postedDate}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobListings;