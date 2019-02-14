import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Projects from '../components/projects'

const ProjectsPage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Projects />
  </Layout>
)

export default ProjectsPage
