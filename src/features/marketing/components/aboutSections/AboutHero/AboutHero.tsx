import * as React from "react";

type AboutHeroProps = {
  // Define component props here
};

export const AboutHero = (props: AboutHeroProps) => {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
          width={1440}
          height={394}
          alt="About"
        />
        <div
          className="absolute inset-0 bg-gray-900 opacity-75"
          aria-hidden="true"
        ></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl text-gray-50 mb-4" data-aos="fade-up">
              The story behind the project
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Developers are trusted to create an engaging experience for their
              companies, so we build tools to help them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
