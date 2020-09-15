import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Wrapper, PageSection, SectionHeader } from '../styles/globalStyles';

const Blog = () => {
    return (
        <Layout>
            <Hero />
            <Wrapper>
                <PageSection>
                    <SectionHeader>Blog</SectionHeader>
                </PageSection>
            </Wrapper>
        </Layout>
    )
}

export default Blog;