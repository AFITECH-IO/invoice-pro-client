import * as React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  LabelInput,
  LabelSelect,
  LabelTextArea,
} from "~src/components";
import { COUNTRY_LIST } from "~src/utils";

type ContactFormProps = {
  // Define component props here
};

export const ContactForm = (props: ContactFormProps) => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    country: "",
    message: "",
  });
  const [countryOptions, setCountryOptions] = useState<
    { value: string; name: string }[]
  >([]);

  useEffect(() => {
    if (COUNTRY_LIST) {
      const countryOptions = [];
      for (const country of COUNTRY_LIST) {
        countryOptions.push({ value: country, name: country });
      }
      setCountryOptions(countryOptions);
    }
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(contactForm);
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-4xl text-gray-50 mb-4" data-aos="fade-up">
              How can we help you?
            </h1>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We have custom plans to power your business. Tell us your needs,
              and we'll contact you shortly.
            </p>
          </div>

          {/* Contact form */}
          <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <LabelInput
                  hasLabel
                  hasRequiredIndicator
                  name="firstName"
                  labelText="First Name"
                  placeholder="Enter your first name"
                  onChange={handleInputChange}
                  value={contactForm.firstName}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <LabelInput
                  hasLabel
                  hasRequiredIndicator
                  name="lastName"
                  labelText="Last Name"
                  placeholder="Enter your last name"
                  onChange={handleInputChange}
                  value={contactForm.lastName}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <LabelInput
                  hasLabel
                  hasRequiredIndicator
                  name="email"
                  labelText="Email"
                  placeholder="Enter your email address"
                  onChange={handleInputChange}
                  value={contactForm.email}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <LabelInput
                  hasLabel
                  hasRequiredIndicator
                  name="subject"
                  labelText="Subject"
                  placeholder="How can we help you?"
                  onChange={handleInputChange}
                  value={contactForm.subject}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <LabelSelect
                  hasLabel
                  hasRequiredIndicator
                  name="country"
                  labelText="Country"
                  placeholder="Select your country"
                  optionItems={countryOptions} 
                  onChange={handleInputChange}
                  value={contactForm.country}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <LabelTextArea
                  id="message"
                  labelText="Message"
                  rows={4}
                  placeholder="Write your message"
                  hasLabel
                  onChange={handleInputChange}
                  value={contactForm.message}
                  hasRequiredIndicator
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-gray-400 ml-2">
                    I agree to the privacy policy
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <Button buttonText="Send" isFullWidth />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
