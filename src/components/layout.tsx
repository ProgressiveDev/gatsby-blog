import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/main.scss"
import style from "./layout.module.scss"

const Layout: React.FC = props => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
