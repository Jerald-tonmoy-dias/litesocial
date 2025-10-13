import { InputBox } from "@/components/forms/input-box";
import { VscAccount } from "react-icons/vsc";

export default function Home() {
  return (
    <div className="d-flex place-items-center h-screen">
      <div className="w-400 my-[60px]">
        <InputBox
        type="number"
        placeholder="email"
        icon={<VscAccount />}
        />
      </div>
    </div>
  );
}
