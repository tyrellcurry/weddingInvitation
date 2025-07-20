import { useEffect, useState } from "react";

function useGetInvitees() {
  const [invitees, setInvitees] = useState<string[] | undefined>([]);

  useEffect(() => {
    // Extract params from URL
    const queryParams = new URLSearchParams(window.location.search);
    const inviteesArr = queryParams.get("invitees")?.split(",");

    setInvitees(inviteesArr);
    // Update state with URL params
  }, []); // Empty dependency array since queryParams is created inside useEffect
  return { invitees };
}

export default useGetInvitees;
