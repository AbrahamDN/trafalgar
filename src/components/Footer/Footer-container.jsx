import React from "react"
import "./Footer-styles.scss"
const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-main">
                    <div className="logo">
                        <img className="logo-img" src={"/logo192.png"}/>
                        <p className="logo-title">Trafalgar</p>
                    </div>

                    <p className="footer-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis tempora blanditiis aperiam!</p>

                    <p className="copyright">©Copyright</p>
                </div>

            <div className="footer-links">
                <div>
                    <h4>1</h4>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
                <div>
                    <h4>1</h4>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
                <div>
                    <h4>1</h4>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
               
            </div>
                

            </div>


        </div>
    )
}

export default Footer
