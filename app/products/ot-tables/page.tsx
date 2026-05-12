"use client";

import otTables from "@/app/data/ot-tables.json";
import { useState, useMemo } from "react";

import EnquiryModal, { EnquiryProduct } from "@/app/components/ot/EnquiryModal";
import OTCard, { OTProduct } from "@/app/components/ot/OTCard";
import OTHero from "@/app/components/ot/OTHero";
import OTToolbar from "@/app/components/ot/OTToolbar";
import OTBottomCTA from "@/app/components/ot/OTBottomCTA";

export default function OTTablesPage() {
  const [activeType, setActiveType]     = useState("All");
  const [searchQuery, setSearchQuery]   = useState("");
  const [enquiry, setEnquiry]           = useState<EnquiryProduct | null>(null);

  const allTypes = useMemo(
    () => ["All", ...Array.from(new Set((otTables as OTProduct[]).map((p) => p.type)))],
    []
  );

  const visible = useMemo(() => {
    let list = otTables as OTProduct[];
    if (activeType !== "All") list = list.filter((p) => p.type === activeType);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.model.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
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
            { label: "OT Tables" },
          ]}
          eyebrow="Operation Theatre"
          title="Operating Tables"
          description="C-ARM compatible, fully motorized, semi-motorized and manual operating tables. Designed for precision surgical positioning."
          stats={[
            { value: `${(otTables as OTProduct[]).length}+`, label: "Models" },
            { value: "C-ARM", label: "Compatible" },
            { value: "SS304", label: "Grade Steel" },
          ]}
          gradientClass="from-blue-700 via-blue-600 to-cyan-500"
          eyebrowColor="text-blue-200"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-16 py-8">

          <OTToolbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            searchPlaceholder="Search OT tables…"
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
                detailBasePath="/products/ot-tables"
                accentColor="blue"
                specBadgeKeys={["Min_Height", "Max_Height", "Trendelenburg"]}
              />
            ))}
            {visible.length === 0 && (
              <div className="col-span-full py-20 text-center text-slate-400">
                <p className="font-semibold mb-2">No results found</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveType("All"); }}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <OTBottomCTA
            title="Need a Custom Operating Table?"
            description="We manufacture to specification. Contact us with your theatre requirements."
            gradientClass="from-blue-600 to-cyan-500"
          />
        </div>
      </div>
    </>
  );
}