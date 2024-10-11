import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Text,
  Section,
  Button,
} from "@react-email/components";

export default function ProductEmail({ link }: { link: string }) {
  return (
    <Html>
      <Head />
      <Preview>Your product is here..</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container style={container}>
            <Text className="text-2xl font-semibold">Hi Friend,</Text>
            <Text className="text-lg text-gray-600">
              Thank you for buying our product at Granaina Marketplace.
            </Text>
            <Section className=" w-full flex justify-center mt-7">
              <Button
                href={link}
                className="text-white bg-blue-500 rounded-lg px-10 py-4"
              >
                Your download link
              </Button>
            </Section>
            <Text className="text-lg">
              Greetings, <br /> GranainaMarketplace Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};
