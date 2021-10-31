import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Head from '../components/Head';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import HeroSplash from '../components/HeroSplash';
import lightskyblue from '../assets/lightskyblue.jpg';

export default function Home(){
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
