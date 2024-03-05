import { Link } from "@/navigation";
import MainButton from "./MainButton";
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 mt-10">
      <Link href={""} target="_blank">
        <MainButton className="p-3 rounded-full aspect-square bg-[#2b2f36] border-none hover:bg-primary">
          <FaYoutube size={20} color="white" />
        </MainButton>
      </Link>
      <Link href={""} target="_blank">
        <MainButton className="p-3 rounded-full aspect-square bg-[#2b2f36] border-none hover:bg-primary">
          <FaFacebookF size={20} color="white" />
        </MainButton>
      </Link>
      <Link href={""} target="_blank">
        <MainButton className="p-3 rounded-full aspect-square bg-[#2b2f36] border-none hover:bg-primary">
          <FaWhatsapp size={20} color="white" />
        </MainButton>
      </Link>
      <Link href={""} target="_blank">
        <MainButton className="p-3 rounded-full aspect-square bg-[#2b2f36] border-none hover:bg-primary">
          <FaXTwitter size={20} color="white" />
        </MainButton>
      </Link>
    </div>
  );
}
