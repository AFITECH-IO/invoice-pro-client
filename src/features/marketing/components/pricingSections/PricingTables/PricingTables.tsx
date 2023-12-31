import * as React from "react";
import { useState } from "react";
import { Toggle } from "~src/components";

type PricingTablesProps = {
  // Define component props here
};

export const PricingTables = (props: PricingTablesProps) => {
  const [annual, setAnnual] = useState<boolean>(true);
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:border-b lg:border-gray-800">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="text-5xl text-gray-50 mb-4" data-aos="fade-up">
              Simple, transparent pricing
            </h1>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Get the Open PRO plan that fits your needs at a special
              introductory price.
            </p>
          </div>

          {/* Pricing tables */}
          <div>
            {/* Pricing toggle */}
            <div
              className="flex justify-center mb-16"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="inline-flex items-center">
                <div className="text-gray-500 font-medium mr-3">
                  Billed Monthly
                </div>
                <div className="form-switch">
                  <Toggle isEnable={annual} onChange={(val) => {
                    setAnnual(val);
                  }} />
                  <label className="bg-gray-600" htmlFor="pricing-toggle">
                    <span className="bg-gray-200" aria-hidden="true"></span>
                    <span className="sr-only">Enable to see yearly prices</span>
                  </label>
                </div>
                <div className="text-gray-500 font-medium ml-3">
                  Billed Annually
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">
              {/* Pricing table 1 */}
              <div
                className="relative flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="text-2xl text-purple-600 mb-1 font-semibold">Free Version</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">
                      $
                    </span>
                    <span className="text-4xl font-semibold text-gray-50">{annual ? "0" : "0"}</span>
                    <span className="font-medium text-gray-400">/mo</span>
                  </div>
                  <div className="text-gray-400">
                    Better insights for growing businesses that want more
                    customers.
                  </div>
                </div>
                <div className="font-medium mb-3 text-gray-50">Features include:</div>
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>50 Placeholder text commonly</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Consectetur adipiscing elit</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat cupidatat</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Officia deserunt mollit anim</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a
                    className="py-2 px-4 flex justify-center text-white bg-purple-600 hover:bg-purple-700 w-full"
                    href="#0"
                  >
                    Sign Up
                  </a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div
                className="relative flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="absolute top-0 right-0 mr-6 -mt-4">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">
                    Most Popular
                  </div>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="text-2xl text-purple-600 mb-1 font-semibold">Paid Version</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">
                      $
                    </span>
                    <span className="text-4xl font-semibold text-gray-50">{annual ? "79" : "85"}</span>
                    <span className="font-medium text-gray-400">/mo</span>
                  </div>
                  <div className="text-gray-400">
                    Better insights for growing businesses that want more
                    customers.
                  </div>
                </div>
                <div className="font-medium mb-3 text-gray-50">
                  All features of Free Version plus:
                </div>
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>100 placeholder text commonly</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Consectetur adipiscing elit</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat cupidatat</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Officia deserunt mollit anim</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Placeholder text commonly used</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a
                    className="py-2 px-4 flex justify-center text-white bg-purple-600 hover:bg-purple-700 w-full"
                    href="#0"
                  >
                    Go Pro
                  </a>
                </div>
              </div>

              {/* Pricing table 3 */}
              {/* <div
                className="relative flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="text-2xl text-purple-600 mb-1 font-semibold">Advanced</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">
                      $
                    </span>
                    <span className="text-4xl font-semibold text-gray-50">{annual ? "129" : "135"}</span>
                    <span className="font-medium text-gray-400">/mo</span>
                  </div>
                  <div className="text-gray-400">
                    Better insights for growing businesses that want more
                    customers.
                  </div>
                </div>
                <div className="font-medium mb-3 text-gray-50">
                  All features of Essential plus:
                </div>
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>200 placeholder text commonly</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Consectetur adipiscing elit</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat cupidatat</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Officia deserunt mollit anim</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Voluptate velit esse cillum</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Placeholder text commonly used</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a
                    className="py-2 px-4 flex justify-center text-white bg-purple-600 hover:bg-purple-700 w-full"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
