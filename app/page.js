import Hero from '../components/Hero';
import CDLTraining from '../components/CDLTraining';
import WhatWeOffer from '../components/WhatWeOffer';
import WhyChooseUs from '../components/WhyChooseUs';
import VisaSponsorship from '../components/VisaSponsorship';
import TransmissionTraining from '../components/TransmissionTraining';

export default function Home() {
  return (
    <div className="page-root">
      <Hero />

      <CDLTraining />

      <WhatWeOffer />

      <WhyChooseUs />

      <VisaSponsorship />

      <TransmissionTraining />
    </div>
  )
}
