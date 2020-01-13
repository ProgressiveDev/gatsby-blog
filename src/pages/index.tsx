import React from "react";
import { Link } from "gatsby";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

const Index: React.FC = () => {
  return (
      <Layout>
        <h1>Hi from index</h1>
        <p>
          Whoohoo! <Link to="contact">Contact me</Link>
        </p>
      </Layout>
  )
}

export default Index;