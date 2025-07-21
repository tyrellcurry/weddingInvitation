import { Button } from "@chakra-ui/react";
import { PopupButton } from "@typeform/embed-react";

const TypeForm = () => {
  return (
    <PopupButton
      id="UdaYoF92"
      size={60}
      hidden={{
        foo: "Foo Value",
        bar: "Bar Value",
      }}
      enableSandbox
      onReady={() => {
        console.log("form ready");
      }}
    >
      <Button bg="#ff7cd8">Click here to RSVP ✨</Button>
    </PopupButton>
  );
};

export default TypeForm;
