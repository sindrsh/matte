import * as React from "react"

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <h1>Velkommen!</h1>
    <p>På denne sida finn du forskjellige ressursar for å øve deg i matte :).</p>
    <p style={{marginTop: "-20px"}}> Menyen til venstre er inndelt etter forskjellige matematiske tema. </p>
    <div style={{ maxWidth: `300px`, marginTop:"-20px"}}>
    </div>
  </Layout>
)

export default IndexPage
