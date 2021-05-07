import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Portfolio = () => {
  <Layout>
    <Seo title="Portfolio" /> 
    <div>
      <h1>DOMAINS</h1>
      <p>Planning/Prep, Env, Instruction, Prof Dev</p>
    </div>
    <Link to="/">Back to HOME</Link>
  </Layout>
}

export default Portfolio