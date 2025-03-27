
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, ArrowRight, Check } from 'lucide-react';

import HeroSection from '@/components/HeroSection';

const PricingPage = () => {
  const [showRut, setShowRut] = useState(true);
  
  // Pricing data for services
  const pricingData = {
    flyttstad: {
      title: "Flyttstäd",
      basicPrice: 1500, // Price per hour before RUT
      items: [
        {
          type: "1 rum & kök (upp till 40m²)",
          price: 2500,
        },
        {
          type: "2 rum & kök (40-60m²)",
          price: 3500,
        },
        {
          type: "3 rum & kök (60-80m²)",
          price: 4500,
        },
        {
          type: "4 rum & kök (80-100m²)",
          price: 5500,
        },
        {
          type: "5 rum & kök (100-120m²)",
          price: 6500,
        },
        {
          type: "Villa (120m²+)",
          price: "Offereras",
          isCustom: true
        }
      ]
    },
    kontorsstad: {
      title: "Kontorsstäd",
      basicPrice: 350, // Price per m² per month
      items: [
        {
          type: "Grundstädning (per m²)",
          price: 60,
        },
        {
          type: "Regelbunden städning (per m² och månad)",
          subItems: [
            { type: "1 gång/vecka", price: 24 },
            { type: "2 gånger/vecka", price: 42 },
            { type: "3 gånger/vecka", price: 55 },
            { type: "5 gånger/vecka", price: 75 }
          ]
        },
        {
          type: "Fönsterputsning (per fönster)",
          price: 100,
        },
        {
          type: "Golvvård (per m²)",
          price: 85,
        }
      ]
    },
    dodsbo: {
      title: "Dödsbo",
      info: "Priser för dödsbo varierar beroende på omfattning och specifika behov. Kontakta oss för en kostnadsfri offert.",
      isCustom: true
    },
    demontering: {
      title: "Demontering & Bortforsling",
      basicPrice: 450, // Per hour
      items: [
        {
          type: "Demontering (per timme)",
          price: 450,
        },
        {
          type: "Bortforsling (per kubikmeter)",
          price: 600,
        },
        {
          type: "Källsortering (per timme)",
          price: 400,
        },
        {
          type: "Transport till återvinningscentral",
          subItems: [
            { type: "Mindre mängd (under 3m³)", price: 1200 },
            { type: "Större mängd (över 3m³)", price: 1800 }
          ]
        }
      ]
    },
    takbyten: {
      title: "Takbyten",
      info: "Kostnaden för takbyten varierar beroende på takets storlek, material och specifika förutsättningar. Kontakta oss för en kostnadsfri inspektion och offert.",
      isCustom: true
    }
  };

  // Calculate price with RUT deduction (50% off labor cost, max 75000 SEK per person per year)
  const calculateRutPrice = (price) => {
    if (typeof price === 'number') {
      return Math.ceil(price * 0.5);
    }
    return price;
  };

  return (
    <div className="page-transition">
      <HeroSection 
        title="Våra priser"
        subtitle="Transparent prissättning för alla våra tjänster, med och utan RUT-avdrag"
        imageUrl="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80"
      />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Prislista</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Nedan hittar du priserna för våra olika tjänster. Alla priser är inklusive moms.
              För tjänster markerade med RUT-avdrag visas både ordinarie pris och pris efter avdrag.
            </p>
            
            <div className="inline-flex items-center rounded-full p-1 bg-secondary mb-8">
              <button 
                className={`px-6 py-2 rounded-full transition-all ${
                  showRut ? 'bg-primary text-primary-foreground' : 'bg-transparent'
                }`}
                onClick={() => setShowRut(true)}
              >
                Med RUT-avdrag
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-all ${
                  !showRut ? 'bg-primary text-primary-foreground' : 'bg-transparent'
                }`}
                onClick={() => setShowRut(false)}
              >
                Utan RUT-avdrag
              </button>
            </div>
            
            <div className="flex items-center justify-center mb-8 text-sm bg-muted p-3 rounded-lg max-w-xl mx-auto">
              <Info size={16} className="mr-2 text-primary flex-shrink-0" />
              <p className="text-left">
                RUT-avdraget gäller för städtjänster och vissa typer av trädgårdsarbete. 
                Avdraget är 50% av arbetskostnaden, upp till 75 000 kr per person och år.
              </p>
            </div>
          </div>
          
          {/* Pricing Tables */}
          <div className="space-y-16">
            {/* Flyttstäd Pricing */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">{pricingData.flyttstad.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full glass rounded-xl overflow-hidden">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-4 text-left">Bostadsstorlek</th>
                      <th className="px-6 py-4 text-right">
                        Pris {showRut ? 'efter RUT-avdrag' : ''}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.flyttstad.items.map((item, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="px-6 py-4">{item.type}</td>
                        <td className="px-6 py-4 text-right font-medium">
                          {item.isCustom ? item.price : (
                            <>
                              {showRut ? (
                                <>
                                  {calculateRutPrice(item.price)} kr
                                  <span className="text-sm text-muted-foreground ml-2">
                                    (ord. {item.price} kr)
                                  </span>
                                </>
                              ) : (
                                `${item.price} kr`
                              )}
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                * Alla priser är inklusive moms och material. Tillägg kan tillkomma för särskilt smutsiga ytor eller specialrengöring.
              </p>
            </div>
            
            {/* Kontorsstäd Pricing */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">{pricingData.kontorsstad.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full glass rounded-xl overflow-hidden">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-4 text-left">Tjänst</th>
                      <th className="px-6 py-4 text-right">
                        Pris {showRut ? 'efter RUT-avdrag' : ''}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.kontorsstad.items.map((item, index) => (
                      <React.Fragment key={index}>
                        {item.subItems ? (
                          <tr className="border-b border-border bg-muted/30">
                            <td colSpan={2} className="px-6 py-3 font-medium">
                              {item.type}
                            </td>
                          </tr>
                        ) : (
                          <tr className="border-b border-border">
                            <td className="px-6 py-4">{item.type}</td>
                            <td className="px-6 py-4 text-right font-medium">
                              {showRut ? (
                                <>
                                  {calculateRutPrice(item.price)} kr
                                  <span className="text-sm text-muted-foreground ml-2">
                                    (ord. {item.price} kr)
                                  </span>
                                </>
                              ) : (
                                `${item.price} kr`
                              )}
                            </td>
                          </tr>
                        )}
                        
                        {item.subItems && item.subItems.map((subItem, subIndex) => (
                          <tr key={`${index}-${subIndex}`} className="border-b border-border">
                            <td className="px-6 py-4 pl-10">{subItem.type}</td>
                            <td className="px-6 py-4 text-right font-medium">
                              {showRut ? (
                                <>
                                  {calculateRutPrice(subItem.price)} kr
                                  <span className="text-sm text-muted-foreground ml-2">
                                    (ord. {subItem.price} kr)
                                  </span>
                                </>
                              ) : (
                                `${subItem.price} kr`
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                * Priser för kontorsstäd är angivna exklusive moms. Tillägg kan tillkomma beroende på specifika krav och behov.
              </p>
            </div>
            
            {/* Demontering & Bortforsling Pricing */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">{pricingData.demontering.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full glass rounded-xl overflow-hidden">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-4 text-left">Tjänst</th>
                      <th className="px-6 py-4 text-right">
                        Pris {showRut ? 'efter RUT-avdrag' : ''}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.demontering.items.map((item, index) => (
                      <React.Fragment key={index}>
                        {item.subItems ? (
                          <tr className="border-b border-border bg-muted/30">
                            <td colSpan={2} className="px-6 py-3 font-medium">
                              {item.type}
                            </td>
                          </tr>
                        ) : (
                          <tr className="border-b border-border">
                            <td className="px-6 py-4">{item.type}</td>
                            <td className="px-6 py-4 text-right font-medium">
                              {item.isCustom ? item.price : (
                                <>
                                  {showRut && item.rutEligible ? (
                                    <>
                                      {calculateRutPrice(item.price)} kr
                                      <span className="text-sm text-muted-foreground ml-2">
                                        (ord. {item.price} kr)
                                      </span>
                                    </>
                                  ) : (
                                    `${item.price} kr`
                                  )}
                                </>
                              )}
                            </td>
                          </tr>
                        )}
                        
                        {item.subItems && item.subItems.map((subItem, subIndex) => (
                          <tr key={`${index}-${subIndex}`} className="border-b border-border">
                            <td className="px-6 py-4 pl-10">{subItem.type}</td>
                            <td className="px-6 py-4 text-right font-medium">
                              {subItem.isCustom ? subItem.price : (
                                <>
                                  {showRut && subItem.rutEligible ? (
                                    <>
                                      {calculateRutPrice(subItem.price)} kr
                                      <span className="text-sm text-muted-foreground ml-2">
                                        (ord. {subItem.price} kr)
                                      </span>
                                    </>
                                  ) : (
                                    `${subItem.price} kr`
                                  )}
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                * Alla priser är inklusive moms. Demontering och bortforsling är inte RUT-berättigat.
              </p>
            </div>
            
            {/* Custom Quote Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {/* Dödsbo */}
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">{pricingData.dodsbo.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {pricingData.dodsbo.info}
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Komplett tömning av bostad</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Värdering av inventarier</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Slutstädning av bostaden</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Miljövänlig återvinning</span>
                  </li>
                </ul>
                <Link 
                  to="/quote" 
                  className="inline-flex items-center text-primary font-medium group"
                >
                  Begär offert
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Link>
              </div>
              
              {/* Takbyten */}
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">{pricingData.takbyten.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {pricingData.takbyten.info}
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Kostnadsfri inspektion och offert</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Kvalitetsmaterial med garanti</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Professionell installation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Grundlig städning efteråt</span>
                  </li>
                </ul>
                <Link 
                  to="/quote" 
                  className="inline-flex items-center text-primary font-medium group"
                >
                  Begär offert
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Link>
              </div>
            </div>
          </div>
          
          {/* RUT Information */}
          <div className="mt-20 bg-secondary p-8 rounded-xl animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Om RUT-avdrag</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  RUT-avdraget är en skattereduktion för hushållsnära tjänster. Det innebär att du 
                  kan få en skattereduktion på 50% av arbetskostnaden för vissa tjänster, upp till 
                  ett maxbelopp på 75 000 kronor per person och år.
                </p>
                <p className="mb-4">
                  För att få RUT-avdrag måste du ha betalat tillräckligt med skatt under året. Vi 
                  hanterar all administration kring RUT-avdraget och drar av beloppet direkt på 
                  din faktura.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3">Vilka tjänster berättigar till RUT-avdrag?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Flyttstäd</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Regelbunden hemstädning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Fönsterputsning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">Vissa trädgårdstjänster</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-20 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Redo att komma igång?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Kontakta oss idag för att diskutera ditt projekt eller begära en offert. 
              Vi ser fram emot att hjälpa dig!
            </p>
            <Link 
              to="/quote" 
              className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg group"
            >
              Begär offert
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
