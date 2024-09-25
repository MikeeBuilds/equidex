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
              <h2 className="font-medium">New Course: Introduction to AI</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2023-09-15
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Exciting news! We're launching a new course on AI fundamentals. 
              Enroll now to learn about machine learning, neural networks, and more.
            </p>
          </div>
          <div className="bg-dexPurpleLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Platform Maintenance</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2023-09-10
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Our platform will undergo maintenance on Sept 12th from 2-4 AM EST. 
              Some features may be temporarily unavailable. We apologize for any inconvenience.
            </p>
          </div>
          <div className="bg-dexYellowLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Student Spotlight: Sarah Johnson</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2023-09-05
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Congratulations to Sarah Johnson for completing all advanced programming courses! 
              Read about her journey and success story on our blog.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Announcements;