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
		<OpgLink to="../opg/ad_gen/"> Addisjon (+) </OpgLink>
		<OpgLink to="../opg/sub_gen/"> Subtraksjon (-) </OpgLink>
		<OpgLink to="../opg/mul_gen/"> Multiplikasjon </OpgLink>
		<OpgLink to="../opg/div_gen/"> Divisjon </OpgLink>
		<OpgLink to="../opg/neg_gen/"> Negative tal </OpgLink>
		<OpgLink to="../opg/lig_gen/"> Likningar </OpgLink>
	</div>
  </Layout>
)

export default IndexPage
