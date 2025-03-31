
import React, { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getHeroImageUrl } from '@/utils/supabaseStorage';

// Define types
type PriceItem = {
  type: string;
  price: number;
  isCustom?: boolean;
  rutEligible?: boolean;
};

type PriceItemWithSubItems = {
  type: string;
  subItems: PriceItem[];
  isCustom?: boolean;
  rutEligible?: boolean;
};

type Price = PriceItem | PriceItemWithSubItems;

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("cleaning");
  
  // Get placeholder image for hero
  const heroImageUrl = getHeroImageUrl();

  // Service price data
  const cleaningPrices: Price[] = [
    {
      type: "Flyttstäd",
      price: 1500,
      rutEligible: true
    },
    {
      type: "Kontorsstäd",
      subItems: [
        { type: "Litet kontor (< 100 kvm)", price: 950, rutEligible: true },
        { type: "Mellanstort kontor (100-300 kvm)", price: 1800, rutEligible: true },
        { type: "Stort kontor (> 300 kvm)", price: 0, isCustom: true, rutEligible: true }
      ]
    },
    {
      type: "Storstädning",
      price: 2200,
      rutEligible: true
    },
    {
      type: "Fönsterputsning",
      price: 750,
      rutEligible: true
    },
    {
      type: "Trappstädning",
      price: 1100,
      rutEligible: true
    }
  ];

  const constructionPrices: Price[] = [
    {
      type: "Takbyte",
      subItems: [
        { type: "Mindre tak (< 80 kvm)", price: 65000 },
        { type: "Mellanstort tak (80-150 kvm)", price: 95000 },
        { type: "Stort tak (> 150 kvm)", price: 0, isCustom: true }
      ]
    },
    {
      type: "Demontering",
      price: 750
    },
    {
      type: "Bortforsling",
      price: 1200
    },
    {
      type: "Dödsbo",
      price: 0,
      isCustom: true
    }
  ];

  const activeTabPrices = activeTab === "cleaning" ? cleaningPrices : constructionPrices;

  // Check if an item is of type PriceItemWithSubItems
  const hasSubItems = (item: Price): item is PriceItemWithSubItems => {
    return 'subItems' in item && Array.isArray(item.subItems);
  };

  return (
    <div className="page-transition">
      <HeroSection 
        title="Priser och tjänster"
        subtitle="Transparenta priser för alla våra tjänster"
        imageUrl={heroImageUrl}
      />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Våra priser</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Transparenta priser som passar din budget</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Vi erbjuder konkurrenskraftiga priser för alla våra tjänster. Notera att vissa komplexa 
              jobb kräver en kostnadsfri offert för att vi ska kunna ge dig ett exakt pris.
            </p>
            
            {/* Tab Buttons */}
            <div className="inline-flex items-center bg-secondary p-1 rounded-full mb-12">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "cleaning" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary-foreground/10"
                }`}
                onClick={() => setActiveTab("cleaning")}
              >
                Städtjänster
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "construction" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary-foreground/10"
                }`}
                onClick={() => setActiveTab("construction")}
              >
                Byggtjänster
              </button>
            </div>
          </div>
          
          {/* Pricing Table */}
          <div className="bg-card rounded-xl overflow-hidden shadow-lg animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary">
                    <th className="px-6 py-4 text-left font-medium">Tjänst</th>
                    <th className="px-6 py-4 text-right font-medium">Pris (SEK)</th>
                    <th className="px-6 py-4 text-center font-medium">Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {activeTabPrices.map((item, index) => (
                    hasSubItems(item) ? (
                      <React.Fragment key={`${item.type}-${index}`}>
                        <tr className="bg-secondary/50">
                          <td colSpan={3} className="px-6 py-3 font-medium">{item.type}</td>
                        </tr>
                        {item.subItems.map((subItem, subIndex) => (
                          <tr key={`${subItem.type}-${subIndex}`} className="hover:bg-muted/50">
                            <td className="px-6 py-4 pl-10">{subItem.type}</td>
                            <td className="px-6 py-4 text-right">
                              {subItem.isCustom ? 'Begär offert' : `${subItem.price} kr`}
                              {subItem.price > 0 && activeTab === "cleaning" && (
                                <span className="text-xs text-muted-foreground block mt-1">
                                  Från {Math.round(subItem.price * 0.5)} kr efter RUT-avdrag
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {subItem.rutEligible && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <div className="inline-flex items-center justify-center p-1 rounded-full bg-primary/10 text-primary">
                                        <HelpCircle size={16} />
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">
                                        Denna tjänst är RUT-berättigad. RUT-avdraget är 50% 
                                        av arbetskostnaden, upp till 50 000 kr per person och år.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ) : (
                      <tr key={`${item.type}-${index}`} className="hover:bg-muted/50">
                        <td className="px-6 py-4">{item.type}</td>
                        <td className="px-6 py-4 text-right">
                          {item.isCustom ? 'Begär offert' : `${item.price} kr`}
                          {item.price > 0 && activeTab === "cleaning" && (
                            <span className="text-xs text-muted-foreground block mt-1">
                              Från {Math.round(item.price * 0.5)} kr efter RUT-avdrag
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.rutEligible && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <div className="inline-flex items-center justify-center p-1 rounded-full bg-primary/10 text-primary">
                                    <HelpCircle size={16} />
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">
                                    Denna tjänst är RUT-berättigad. RUT-avdraget är 50% 
                                    av arbetskostnaden, upp till 50 000 kr per person och år.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Note */}
          <div className="mt-8 p-6 bg-muted rounded-xl animate-fade-in">
            <h3 className="text-lg font-medium mb-2">Viktig information om priser:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <Check className="text-primary mr-2 mt-0.5 shrink-0" size={18} />
                <span>Alla priser är inklusive moms och gäller från 1 januari 2023.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 mt-0.5 shrink-0" size={18} />
                <span>"Begär offert" innebär att priset varierar beroende på arbetets omfattning och specifika krav.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 mt-0.5 shrink-0" size={18} />
                <span>RUT-avdraget är 50% av arbetskostnaden, upp till 50 000 kr per person och år.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 mt-0.5 shrink-0" size={18} />
                <span>För städtjänster tillkommer normalt inga extra kostnader för rengöringsmedel eller utrustning.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 mt-0.5 shrink-0" size={18} />
                <span>För byggtjänster kan materialkostnader tillkomma beroende på projektets art.</span>
              </li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center animate-fade-in">
            <p className="text-muted-foreground mb-6">
              Har du frågor om våra priser eller vill begära en offert?
            </p>
            <Link to="/quote">
              <Button size="lg" className="rounded-full">
                Begär offert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
