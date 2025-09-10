"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoWidth={120}
        logoHeight={40}
        className="z-50"
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "Footer", id: "footer" },
        ]}
        buttonText="Shop Retro"
        onButtonClick={() => console.log('Shop Retro Clicked')}
      />

      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Join the Retro Revolution!"
          subtitle="Explore the thrilling world of RetroPulse Games."
          contractAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="Get to Know Us"
          descriptions={[
            "RetroPulse brings you the best retro gaming experiences.",
            "Join a community that values nostalgia and innovation."
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Understanding Our Tokenomics"
          description="Learn about our token distribution, usage, and future plans."
          kpiItems={[
            { value: "70%", description: "Token Distribution" },
            { value: "30%", description: "Marketing Funds" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="RetroPulse Logo"
          logoText="RetroPulse"
          columns={[
            { items: [{ label: 'Home', onClick: () => console.log('Home Clicked') }, { label: 'About', onClick: () => console.log('About Clicked') }] },
            { items: [{ label: 'How to Buy', onClick: () => console.log('How to Buy Clicked') }, { label: 'Tokenomics', onClick: () => console.log('Tokenomics Clicked') }] },
            { items: [{ label: 'Privacy', onClick: () => console.log('Privacy Clicked') }, { label: 'Terms', onClick: () => console.log('Terms Clicked') }] },
          ]}
          copyrightText="© 2023 RetroPulse. All rights reserved."
          onPrivacyClick={() => console.log('Privacy Policy Clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}
