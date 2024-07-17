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

interface VerifactionEmailProps { 
  userName: string;
  otp: string
}
export default function ({userName, otp}: VerifactionEmailProps) {
  return (
    <Html>
      <Head>
        <title>Verifaction Code</title>
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

      <Preview>Verifaction Code</Preview>
      <Section>
        <Row>
          <Heading>
            Welcome, {userName}!
          </Heading>
        </Row>
        <Row>
          <Heading>
            Thanks you for registering. Please use the following code to complete your registration. 
          </Heading>
        </Row>
        <Row>
          <Text>
           <h2>
              Your OTP is : {otp}
            </h2>  
          </Text>
        </Row>
      </Section>  
      </Body>
    </Html>
  )
}