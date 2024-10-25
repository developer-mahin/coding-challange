import { UserAgentProvider } from "@/components/providers/userAgentProvider";
import { UserAgent } from "@/views/userAgent";
import { cookies } from "next/headers";

const UserAgentRoot = () => {
  const userAgent = cookies().get("user_agent");

  return (
    <UserAgentProvider userAgent={userAgent?.value}>
      <UserAgent />
    </UserAgentProvider>
  );
};

export default UserAgentRoot;
