import { CheckIcon } from "@heroicons/react/20/solid";
import * as React from "react";
// @ts-ignore
import IllustrationImage from "./assets/features-illustration.png";

type Props = {};

export const HomeFeatures = (props: Props) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="relative">
                  <img
                    className="md:max-w-none"
                    src={IllustrationImage}
                    width={540}
                    height={520}
                    alt="Features illustration"
                  />
                  <svg
                    className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                    width="540"
                    height="520"
                    viewBox="0 0 540 520"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-purple-600">
                      <circle className="pulse" cx="270" cy="260" r="64" />
                      <circle
                        className="pulse pulse-1"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-2"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-3"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="text-xl tracking-wider uppercase font-semibold text-purple-600 mb-2">
                    Lighting fast workflow
                  </div>
                  <h3 className="text-4xl text-gray-50 mb-3">
                    Say hello to research data
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa.
                  </p>
                  <ul className="flex flex-wrap text-lg text-gray-400 -mx-2 -my-1">
                    <li className="flex items-center mx-2 my-1">
                      <CheckIcon className="w-5 h-5 fill-current text-green-500 mr-2 shrink-0" />
                      <span>Premium statistics</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <CheckIcon className="w-5 h-5 fill-current text-green-500 mr-2 shrink-0" />
                      <span>Unlimited jobs</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <CheckIcon className="w-5 h-5 fill-current text-green-500 mr-2 shrink-0" />
                      <span>Free goods</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <CheckIcon className="w-5 h-5 fill-current text-green-500 mr-2 shrink-0" />
                      <span>No code required</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <CheckIcon className="w-5 h-5 fill-current text-green-500 mr-2 shrink-0" />
                      <span>Always up to date</span>
                    </li>
                  </ul>
                  <div className="flex items-start mt-8">
                    <img
                      className="rounded-full shrink-0 mr-4"
                      src={
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                      }
                      width={40}
                      height={40}
                      alt="Features avatar"
                    />
                    <div>
                      <blockquote className="text-gray-400 italic m-0 mb-3">
                        "Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing".
                      </blockquote>
                      <div className="text-gray-700 font-medium">
                        <cite className="text-gray-200 not-italic">
                          — Jonathan Doe
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
