const Announcements = () => {
    return (
      <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Announcements</h1>
          <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="bg-dexSkyLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">New Feature: Project Matching Algorithm</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2023-09-15
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              We&apos;ve launched a new AI-powered matching algorithm to help founders find the perfect collaborators for their projects. Check it out in your dashboard!
            </p>
          </div>
          <div className="bg-dexPurpleLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Upcoming Webinar: Equity Structuring</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2023-09-10
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Join us on Sept 20th for a webinar on structuring sweat equity agreements. Learn best practices from experienced founders and legal experts.
            </p>
          </div>
          <div className="bg-dexYellowLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Success Story: TechNova Startup</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2023-09-05
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              TechNova, formed through our platform, just secured $2M in seed funding! Read about how they built their team and product using sweat equity.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Announcements;