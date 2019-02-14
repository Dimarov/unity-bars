import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Vacancies from '../components/vacancies'

const VacanciesPage = () => (
  <Layout>
    <Header ukLink="vacancies" ruLink="vacancies-ru" enLink="vacancies-en" />
    <Vacancies />
  </Layout>
)

export default VacanciesPage
