"use client";

import otLights from "@/app/data/ot-lights.json";
import { useState, useMemo } from "react";
import EnquiryModal, { EnquiryProduct } from "@/app/components/ot/EnquiryModal";
import OTCard, { OTProduct } from "@/app/components/ot/OTCard";
import OTHero from "@/app/components/ot/OTHero";
import OTToolbar from "@/app/components/ot/OTToolbar";
import OTBottomCTA from "@/app/components/ot/OTBottomCTA";

export default function OTLightsPage() {
  const [activeType, setActiveType]   = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [enquiry, setEnquiry]         = useState<EnquiryProduct | null>(null);

  const allTypes = ["All", "Single Dome", "Dual Dome"];

  const visible = useMemo(() => {
    let list = otLights as OTProduct[];
    if (activeType !== "All") list = list.filter((p) => p.type === activeType);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.model.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeType, searchQuery]);

  return (
    <>
      <EnquiryModal product={enquiry} onClose={() => setEnquiry(null)} />

      <div className="min-h-screen bg-slate-50">

        <OTHero
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "OT Lights" },
          ]}
          eyebrow="Surgical Lighting"
          title="OT Lights"
          description="LED surgical lights with 160,000+ lux intensity. 50,000-hour LED life, 95 CRI, and 360° arm movement for shadow-free illumination."
          stats={[
            { value: `${(otLights as OTProduct[]).length}+`, label: "Models" },
            { value: "160K",   label: "Lux Output" },
            { value: "50K hrs", label: "LED Life" },
          ]}
          gradientClass="from-blue-700 via-blue-600 to-cyan-500"
          eyebrowColor="text-blue-200"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-16 py-8">

          <OTToolbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            searchPlaceholder="Search OT lights…"
            types={allTypes}
            activeType={activeType}
            onTypeChange={setActiveType}
            resultCount={visible.length}
            activeCategory={activeType !== "All" ? activeType : undefined}
           accentColor="blue"
          />

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {visible.map((p) => (
              <OTCard
                key={p.id}
                product={p}
                onEnquire={setEnquiry}
                detailBasePath="/products/ot-lights"
                 accentColor="blue"
                specBadgeKeys={["Dome_Size", "Intensity_Lux", "Power_Consumption"]}
              />
            ))}
            {visible.length === 0 && (
              <div className="col-span-full py-20 text-center text-slate-400">
                <p className="font-semibold mb-2">No results found</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveType("All"); }}
                  className="text-sm text-amber-600 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <OTBottomCTA
            title="Looking for a specific configuration?"
            description="We supply single dome, dual dome, ceiling and floor-mounted variants. Call us to discuss."
            gradientClass="from-blue-600 to-cyan-500"
          />
        </div>
      </div>
    </>
  );
}