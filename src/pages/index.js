import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <ContactForm />
    </Layout>
  )
}
