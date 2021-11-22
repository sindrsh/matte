import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import {opg} from "../components/cont.module.css"

const OpgLink = props =>
    <Link 
    to={props.to}
    className={opg}
    activeStyle={{color: "black"}}>
    {props.children}
    </Link>

const IndexPage = () => (
  <Layout>
	<div className={opg}>
		<OpgLink to="../opg/ad_gen/"> Addisjon </OpgLink>
		<OpgLink to="../opg/neg_gen/"> Negative tal </OpgLink>
	</div>
  </Layout>
)

export default IndexPage
