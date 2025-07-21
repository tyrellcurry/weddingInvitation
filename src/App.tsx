import { Box, Center, Heading, Image, Link, Text } from "@chakra-ui/react";

import FadeInBox from "./components/FadeInBox/FadeInBox";
import TabContent from "./components/TabPage/TabContent";
import TabPage from "./components/TabPage/TabPage";
import TypeForm from "./components/TypeForm/TypeForm";
import useGetInvitees from "./hooks/useGetInvitees";

function App() {
  const { invitees } = useGetInvitees();

  const Invitees = () =>
    invitees?.map((person, index) => {
      if (invitees.length === 1) return person;
      return (
        <span>
          {index === invitees.length - 1 ? `and ${person}` : `${person}, `}
        </span>
      );
    });

  return (
    <Box as="main" mb={20}>
      <FadeInBox delay={0.5} duration={3.5}>
        <Box mb={2}>
          <Center>
            <Image maxW={400} src="images/intro-t-l.png" w="80%" />
          </Center>
        </Box>
      </FadeInBox>
      <Box as={"main"} p={6}>
        <Box mb={6}>
          {!!invitees && (
            <FadeInBox delay={2.5} duration={3}>
              <Heading
                as="h2"
                color="#9b8f96"
                fontFamily="Libre Caslon Text"
                lg={{ marginTop: "1rem", fontSize: "2rem", lineHeight: "auto" }}
                mb={5}
                size="xl"
                textAlign="center"
              >
                <Invitees />
                {", "}
                you're invited!
              </Heading>
            </FadeInBox>
          )}
          <FadeInBox delay={invitees ? 4.25 : 2.5} duration={3}>
            <Heading
              as="h1"
              color="#c198bc"
              fontFamily="Dancing Script, serif"
              mb={4}
              size="4xl"
              textAlign="center"
              lg={{
                marginTop: "1rem",
                fontSize: "2.25rem",
                lineHeight: "auto",
              }}
            >
              Luanna & Ty's Wedding
            </Heading>
            <Text fontStyle="italic" fontWeight={300} textAlign="center">
              06/20/2026
            </Text>
          </FadeInBox>
        </Box>
        <FadeInBox delay={invitees ? 6 : 4.5} duration={2}>
          {!!invitees && (
            <Center
              lg={{
                marginTop: "1.5rem",
              }}
            >
              <TypeForm />
            </Center>
          )}
          <Box mt={6}>
            <Text lg={{ display: "none" }} mb={4} textAlign="center">
              👇 Click to view details 👇
            </Text>
            <TabPage>
              <TabContent value="tab1">
                <Heading fontFamily="Libre Caslon Text" mb={2} size="3xl">
                  Ceremony
                </Heading>
                <Text mb={2}>
                  <Text fontWeight={600}>Start time:</Text> 4:00pm
                </Text>
                <Text>
                  <Text fontWeight={600}>Location:</Text>
                  <Link
                    color="blue"
                    href="https://maps.app.goo.gl/Pe8BDbjJGB2zTyCA6"
                    target="_blank"
                  >
                    Heron Lake, VanDusen Gardens, Vancouver, BC
                  </Link>
                </Text>
                <Link href="/images/map.png">
                  <Image mt={2} src="/images/map.png" />
                </Link>
                <Text fontSize={12}>
                  Enterance and ceremony location highlighted in red
                </Text>
              </TabContent>
              <TabContent value="tab2">
                <Heading fontFamily="Libre Caslon Text" mb={2} size="3xl">
                  Reception
                </Heading>
                <Text mb={2}>
                  <Text fontWeight={600}>Start time:</Text> 6:00pm
                </Text>
                <Text fontWeight={600}>Location:</Text>
                <Link
                  color="blue"
                  href="https://maps.app.goo.gl/T2MoQQ8BNs382Dzf9"
                  target="_blank"
                >
                  The Arbutus Club, Vancouver, BC
                </Link>
                <Image mt={2} src="/images/arbutus.gif" />
              </TabContent>
            </TabPage>
          </Box>
        </FadeInBox>
      </Box>
    </Box>
  );
}

export default App;
