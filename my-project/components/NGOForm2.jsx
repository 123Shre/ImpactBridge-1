import React, { useState } from "react";
import tw from "tailwind-styled-components";

const FormContainer = tw.div`
max-w-md
  mx-auto
  bg-white
  rounded-xl
  shadow-md
  overflow-hidden
  p-6
`;

const InputLabel = tw.label`
block
text-gray-700
text-sm
font-bold
mb-2
`;

const InputField = tw.input`
  appearance-none
  border
  rounded-xl
  w-full
  py-2
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline
  focus:border-blue-300
  mb-4
`;

const SubmitButton = tw.button`
  bg-purple-500
  hover:bg-purple-700
  text-white
  font-bold
  py-2
  px-4
  rounded-xl
  focus:outline-none
  focus:shadow-outline
`;

const ErrorLabel = tw.p`
  text-sm
  text-red-500
`;
const CenteredContainer = tw.div`
  flex
  justify-center
`;
const DocumentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationCertFile, setRegistrationCertFile] = useState(null);
  const [constitutionFile, setConstitutionFile] = useState(null);
  const [financialStatementsFile, setFinancialStatementsFile] = useState(null);
  const [taxExemptionFile, setTaxExemptionFile] = useState(null);
  const [boardOfDirectorsFile, setBoardOfDirectorsFile] = useState(null);
  const [projectReportsFile, setProjectReportsFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation logic goes here
    // If validation fails, setErrorMessage with appropriate message
    // If validation passes, submit the form data to the backend
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <InputField
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <InputLabel>Documents to Verify</InputLabel>
        <InputLabel>Registration Certificate</InputLabel>
        <InputField
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(event) => setRegistrationCertFile(event.target.files[0])}
          required
        />

        <InputLabel>Constitution or Bylaws</InputLabel>
        <InputField
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(event) => setConstitutionFile(event.target.files[0])}
          required
        />

        <InputLabel>Financial Statements</InputLabel>
        <InputField
          type="file"
          accept=".pdf,.xlsx,.csv"
          onChange={(event) =>
            setFinancialStatementsFile(event.target.files[0])
          }
          required
        />

        <InputLabel>Tax Exemption Certificate</InputLabel>
        <InputField
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={(event) => setTaxExemptionFile(event.target.files[0])}
          required
        />
        <InputLabel>Board of Directors or Trustees Information</InputLabel>
        <InputField
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(event) => setBoardOfDirectorsFile(event.target.files[0])}
          required
        />

        <InputLabel>Project Reports or Impact Assessments</InputLabel>
        <InputField
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(event) => setProjectReportsFile(event.target.files[0])}
          required
        />

        {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
        <CenteredContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </CenteredContainer>
      </form>
    </FormContainer>
  );
};

export default DocumentForm;
