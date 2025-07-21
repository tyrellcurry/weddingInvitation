import { Box, Tabs } from "@chakra-ui/react";
interface TabPageProps {
  children: React.ReactNode;
}

const TabPage = ({ children }: TabPageProps) => {
  return (
    <Tabs.Root
      defaultValue="tab1"
      margin="auto"
      maxW={1000}
      variant="plain"
      lg={{
        marginTop: "2rem",
      }}
      fitted
    >
      <Tabs.List bg="bg.muted" p="1" rounded="l3">
        <Tabs.Trigger value="tab1">Ceremony</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Reception</Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Box>{children}</Box>
    </Tabs.Root>
  );
};

export default TabPage;
