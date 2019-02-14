import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Projects from '../components/projects'

const ProjectsPage = () => (
  <Layout>
    <Header ukLink="projects" ruLink="projects-ru" enLink="projects-en" />
    <Projects />
  </Layout>
)

export default ProjectsPage
