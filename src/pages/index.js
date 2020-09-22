import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Head from '../components/Head';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import HeroSplash from '../components/HeroSplash';

export default function Home() {
  return (
    <Layout>
      <Head title="Portfolio" />
      <HeroSplash />
      <Hero />
      <Projects />
      <Skills />
      <ContactForm />
    </Layout>
  )
}
