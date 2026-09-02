/* Reference-led Japanese comparison portal: Deep Jade trust palette, residential hero, diagnosis-first flow, dense but friendly comparison cards. */
import { useState } from "react";
import BottomCta from "@/components/home/BottomCta";
import BrowseSection from "@/components/home/BrowseSection";
import CoatingTypesSection from "@/components/home/CoatingTypesSection";
import CompaniesSection from "@/components/home/CompaniesSection";
import { coatings, companies } from "@/components/home/data";
import DiagnosisBanner from "@/components/home/DiagnosisBanner";
import DiagnosisModal from "@/components/home/DiagnosisModal";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import SiteFooter from "@/components/home/SiteFooter";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [diagnosisOpen, setDiagnosisOpen] = useState(false);

  const scrollToCompanies = () => document.getElementById("companies")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="jp-site">
      <div className="top-notice">
        <div className="jp-container">
          <span>全国の優良施工店を比較できます</span>
          <span>比較基準・料金目安を2026年9月に更新</span>
        </div>
      </div>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onScrollToCompanies={scrollToCompanies}
        onOpenDiagnosis={() => setDiagnosisOpen(true)}
      />
      <main id="top">
        <Hero onOpenDiagnosis={() => setDiagnosisOpen(true)} onScrollToCompanies={scrollToCompanies} />
        <DiagnosisBanner onOpenDiagnosis={() => setDiagnosisOpen(true)} />
        <CoatingTypesSection coatings={coatings} />
        <BrowseSection onOpenDiagnosis={() => setDiagnosisOpen(true)} />
        <CompaniesSection companies={companies} />
        <BottomCta onOpenDiagnosis={() => setDiagnosisOpen(true)} />
      </main>
      <SiteFooter onOpenDiagnosis={() => setDiagnosisOpen(true)} />
      <DiagnosisModal open={diagnosisOpen} onClose={() => setDiagnosisOpen(false)} />
    </div>
  );
}
