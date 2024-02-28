import { Link } from "@/navigation";
import MainButton from "./MainButton";
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5 mt-10">
      <Link href={""} target="_blank">
        <MainButton className="p-1">
          <FaYoutube size={25} color="white" />
        </MainButton>
      </Link>
      <Link href={""} target="_blank">
        <MainButton className="p-1">
          <FaFacebookF size={25} color="white" />
        </MainButton>
      </Link>
      <Link href={""} target="_blank">
        <MainButton className="p-1">
          <FaWhatsapp size={25} color="white" />
        </MainButton>
      </Link>
      <Link href={""} target="_blank">
        <MainButton className="p-1">
          <FaXTwitter size={25} color="white" />
        </MainButton>
      </Link>
    </div>
  );
}
