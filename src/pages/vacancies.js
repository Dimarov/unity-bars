import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Vacancies from '../components/vacancies'

const VacanciesPage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Vacancies />
  </Layout>
)

export default VacanciesPage
