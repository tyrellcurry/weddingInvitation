import { Tabs } from "@chakra-ui/react";

interface TabContentProps {
  value: string;
  children: React.ReactNode;
}

const TabContent = ({ value, children }: TabContentProps) => {
  return <Tabs.Content value={value}>{children}</Tabs.Content>;
};

export default TabContent;
