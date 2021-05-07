import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Portfolio = () => {
  <Layout>
    <Seo title="Portfolio" /> 
    <div>
      <h1>Teaching Portfolio</h1>
      <p>PLANNING - ENVIRONMENT - INSTRUCTION - DEVELOPMENT</p>
    </div>
    <Link to="/">Back to HOME</Link>
  </Layout>
}

export default Portfolio