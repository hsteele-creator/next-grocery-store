import Image from "next/image";
import LogoSection from "../LogoSections";

export default function CompanyInfo() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-4 py-6">
        <div className="flex gap-1 text-[10px]">
          <Image
            height={15}
            width={15}
            src="/images/location.svg"
            alt="location icon"
          />
          <p className="font-medium">Address:</p>
          <p>123 Fake Road Street</p>
        </div>
        <div className="flex gap-1 text-[10px]">
          <Image
            height={15}
            width={15}
            src="/images/phone.svg"
            alt="phone icon"
          />
          <p className="font-medium">Call Us:</p>
          <p>123-456-7890</p>
        </div>
        <div className="flex gap-1 text-[10px]">
          <Image
            height={15}
            width={15}
            src="/images/mail.svg"
            alt="mail icon"
          />
          <p className="font-medium">Email:</p>
          <p>fakemail@contact.com</p>
        </div>
        <div className="flex gap-1 text-[10px]">
          <Image
            height={15}
            width={15}
            src="/images/clock.svg"
            alt="clock icon"
          />
          <p className="font-medium">Work Hours:</p>
          <p>8:00 - 10:00, Sunday - Friday</p>
        </div>
      </div>
    </div>
  );
}
