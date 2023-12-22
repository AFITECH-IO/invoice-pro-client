import {
  FolderPlusIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import * as React from "react";

type Props = {};

export const Process = (props: Props) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-2xl text-gray-50 mb-4" data-aos="fade-up">
              Our process is simple and effective
            </h2>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
            >
              <div
                aria-hidden="true"
                className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                style={{
                  width: "calc(100% - 32px)",
                  left: "calc(50% + 48px)",
                  top: "32px",
                }}
                data-aos="fade-in"
                data-aos-delay="200"
              ></div>
              <div className="h-16 w-16 bg-purple-600 rounded-full flex justify-center items-center mb-4">
                <UserIcon className="h-8 w-8 text-gray-50" />
              </div>
              <h4 className="text-xl text-gray-50 mb-2">
                <span className="text-gray-400">1</span>. Create Account
              </h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                aria-hidden="true"
                className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                style={{
                  width: "calc(100% - 32px)",
                  left: "calc(50% + 48px)",
                  top: "32px",
                }}
                data-aos="fade-in"
                data-aos-delay="400"
              ></div>
              <div className="h-16 w-16 bg-purple-600 rounded-full flex justify-center items-center mb-4">
                <FolderPlusIcon className="h-8 w-8 text-gray-50" />
              </div>
              <h4 className="text-xl text-gray-50 mb-2">
                <span className="text-gray-400">2</span>. Create Custom Invoices
              </h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="h-16 w-16 bg-purple-600 rounded-full flex justify-center items-center mb-4">
                <PaperAirplaneIcon className="h-8 w-8 text-gray-50" />
              </div>
              <h4 className="text-xl text-gray-50 mb-2">
                <span className="text-gray-400">3</span>. Send to Clients
              </h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
