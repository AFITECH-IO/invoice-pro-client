import * as React from "react";

type AboutTeamProps = {
  // Define component props here
};

export const AboutTeam = (props: AboutTeamProps) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl text-gray-50 mb-4">It began with just one</h2>
            <p className="text-xl text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consequat.
            </p>
          </div>

          <div
            className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3"
            data-aos-id-team
          >
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full object-cover h-32 w-32 mb-4"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                  alt="Team member 01"
                />
                <h4 className="text-xl font-medium mb-1 text-gray-50">
                  Landon McKell
                </h4>
                <div className="text-gray-500 mb-1">CEO & Founder</div>
              </div>
            </div>

            {/* 2nd member */}
            {/* <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full object-cover h-32 w-32 mb-4"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                  alt="Team member 02"
                />
                <h4 className="text-xl font-medium mb-1 text-gray-50">
                  Marie Koniuszek
                </h4>
                <div className="text-gray-500 mb-1">CEO & Co-founder</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  @marie_moon
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
