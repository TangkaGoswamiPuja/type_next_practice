import Clientspage from "@/components/Clients/Clientspage";
import Homepage from "@/components/Homepage/Homepage";
import Caring from "@/components/Nextallcompo/Caring";
import Demo from "@/components/Nextallcompo/Demo";
import Design from "@/components/Nextallcompo/Design";
import Local from "@/components/Nextallcompo/Local";
import Pixelgrade from "@/components/Nextallcompo/Pixelgrade";
import System from "@/components/Nextallcompo/System";
import TimSmith from "@/components/Nextallcompo/TimSmith";

export default function Home() {
  return (
<div>
  <Homepage />
  <Clientspage />
  <System />
  <Pixelgrade />
  <Local />
  <Design />
  <TimSmith />
  <Caring />
  <Demo />

</div>
  );
}
