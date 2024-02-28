import LogoSection from "../LogoSections";
import CompanyInfo from "./CompanyInfo";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <div className="flex items-center justify-between">
      <LogoSection />
      <FooterMenu />
      <CompanyInfo />
    </div>
  );
}
