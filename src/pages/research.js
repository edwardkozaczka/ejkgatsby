import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Research = () => {
  <Layout>
    <Seo title="Research" /> 
    <div>
      <h1>Publications</h1>
      <p>articles, books, reviews...</p>
    </div>
    <Link to="/">Back to HOME</Link>
  </Layout>
}

export default Research