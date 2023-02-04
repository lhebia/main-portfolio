import React from 'react';
import Layout from '../Layout';
import About from '../About';
import Head from '../Head';
import Projects from '../Projects';
import Skills from '../Skills';
import ContactForm from '../ContactForm';
import HeroSplash from '../HeroSplash';
import lightskyblue from '../assets/lightskyblue.jpg';

export default function Portfoliov2(){
  // OLD Pre-2022 portfolio layout
  return (
    <Layout>
      <Head title="Portfolio" />
      <HeroSplash background={lightskyblue} />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
    </Layout>
  )
}
