import {
  Html, 
  Head,
  Body,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface VerificationEmailProps { 
  username: string;
  otp: string;
}

const VerificationEmail: React.FC<VerificationEmailProps> = ({ username, otp }) => {
  return (
    <Html>
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body>
        <Preview>Verification Code</Preview>
        <Section>
          <Row>
            <Heading as="h1">Welcome, {username}!</Heading>
          </Row>
          <Row>
            <Text>
              Thank you for registering. Please use the following code to complete your registration.
            </Text>
          </Row>
          <Row>
            <Text>
              <strong>Your OTP is: {otp}</strong>
            </Text>
          </Row>
        </Section>  
      </Body>
    </Html>
  );
};

export default VerificationEmail;
