import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    organizationName: '',
    organizationType: '',
    contactPersonName: '',
    contactPersonEmail: '',
    contactPersonPhone: '',
    organizationWebsite: '',
    missionStatement: '',
    activitiesDescription: '',
    geographicFocus: '',
    targetBeneficiaryGroups: '',
    registrationNumber: '',
    socialMediaLinks: '',
    referralSource: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mt-8 mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex">
        <div className="w-1/2 pr-4">
          <label className="block mb-2">
            Organization Name:
            <input
              type="text"
              name="organizationName"
              value={formValues.organizationName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2">
            Contact Person Name:
            <input
              type="text"
              name="contactPersonName"
              value={formValues.contactPersonName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2">
            Contact Person Email:
            <input
              type="email"
              name="contactPersonEmail"
              value={formValues.contactPersonEmail}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2">
            Organization Website:
            <input
              type="url"
              name="organizationWebsite"
              value={formValues.organizationWebsite}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2">
            Activities Description:
            <textarea
              name="activitiesDescription"
              value={formValues.activitiesDescription}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            ></textarea>
          </label>

          <label className="block mb-2">
            Target Beneficiary Groups:
            <input
              type="text"
              name="targetBeneficiaryGroups"
              value={formValues.targetBeneficiaryGroups}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2">
            Social Media Links:
            <input
              type="text"
              name="socialMediaLinks"
              value={formValues.socialMediaLinks}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>

        <div className="w-1/2 pl-4">
          <label className="block mb-2">
            Organization Type:
            <input
              type="text"
              name="organizationType"
              value={formValues.organizationType}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md "
              />
          </label>

          <label className="block mb-2">
            Contact Person Phone Number:
            <input
              type="tel"
              name="contactPersonPhone"
              value={formValues.contactPersonPhone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2">
            Mission Statement:
            <textarea
              name="missionStatement"
              value={formValues.missionStatement}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            ></textarea>
          </label>

          <label className="block mb-2">
            Geographic Focus:
            <input
              type="text"
              name="geographicFocus"
              value={formValues.geographicFocus}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2">
            Registration/License Number:
            <input
              type="text"
              name="registrationNumber"
              value={formValues.registrationNumber}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block mb-2">
            How did you hear about our platform?
            <input
              type="text"
              name="referralSource"
              value={formValues.referralSource}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 ml-56 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
