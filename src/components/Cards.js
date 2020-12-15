import React,{Fragment} from 'react'

class Cards extends React.Component{
    render(){
        return(
            <Fragment>
            <div style={{marginTop: "80px", marginBottom: "80px", paddingTop: "0px", paddingBottom: "0px"}}>
                <div style={{textAlign: "center"}}>
                    <h2 style={{marginTop: "0px", marginBottom: "0px", lineHeight: "1.25", fontWeight: "700", color: "rgb(17, 17, 17)", fontSize: "38px", letterSpacing: "-0.005em"}}>Built to empower every team
                    </h2>
                    <p style={{color: "rgba(0, 0, 0, 0.6)", marginTop: "8px", fontSize: "20px"}}>Notion solves problems unique to every function.
                    </p>
                </div>

                <div style={{marginTop: "40px", marginBottom: "40px", paddingTop: "0px", paddingBottom: "0px"}}>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0px"}}>
                        <div style={{borderLeft: "1px solid transparent", borderTop: "1px solid transparent", padding: "40px 20px"}}>
                            <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/product.png" alt="Set of boxes" style={{width: "160px", display: "block", margin: "0px auto"}}/>
                            <h4 style={{margin: "10px 0px", lineHeight: "1.35", fontWeight: "700", textAlign: "center", color: "rgb(17, 17, 17)", fontSize: "22px"}}>Product
                            </h4>

                            <ul style={{listStyle: "none", textAlign: "center", margin: "0px", padding: "0px"}}>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Visualize your product roadmap</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Write feature specs</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Cross-functional collaboration</li>
                            </ul>

                        </div>

                        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.1)", borderTop: "1px solid transparent", padding: "40px 20px"}}>
                            <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/engineering.png" alt="Set of tools" style={{width: "160px", display: "block", margin: "0px auto"}}/>
                            <h4 style={{margin: "10px 0px", lineHeight: "1.35", fontWeight: "700", textAlign: "center", color: "rgb(17, 17, 17)", fontSize: "22px"}}>Engineering
                            </h4>
                            <ul style={{listStyle: "none", textAlign: "center", margin: "0px", padding: "0px"}}>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Coordinate releases</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Codify processes</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Write docs to ship fast</li>
                            </ul>
                        </div>

                        <div style={{borderLeft: "1px solid transparent", borderTop: "1px solid rgba(0, 0, 0, 0.1)", padding: "40px 20px"}}>
                            <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/hr.png" alt="Plant in a pot" style={{width: "160px", display: "block", margin: "0px auto"}}/>
                            <h4 style={{margin: "10px 0px", lineHeight: "1.35", fontWeight: "700", textAlign: "center", color: "rgb(17, 17, 17)", fontSize: "22px"}}>HR
                            </h4>
                            <ul style={{listStyle: "none", textAlign: "center", margin: "0px", padding: "0px"}}>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Create a company wiki</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Answer questions at scale</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Onboard new employees</li>
                            </ul>
                        </div>

                        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.1)", borderTop: "1px solid rgba(0, 0, 0, 0.1)", padding: "40px 20px"}}>
                            <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/design.png" alt="Pen" style={{width: "160px", display: "block", margin: "0px auto"}}/>
                            <h4 style={{margin: "10px 0px", lineHeight: "1.35", fontWeight: "700", textAlign: "center", color: "rgb(17, 17, 17)", fontSize: "22px"}}>Design
                            </h4>
                            <ul style={{listStyle: "none", textAlign: "center", margin: "0px", padding: "0px"}}>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Track every project</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Catalog logos, fonts, and assets</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Publish a design system</li>
                            </ul>
                        </div>

                        <div style={{borderLeft: "1px solid transparent", borderTop: "1px solid rgba(0, 0, 0, 0.1)", padding: "40px 20px"}}>
                            <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/sales.png" alt="Stack of papers" style={{width: "160px", display: "block", margin: "0px auto"}}/>
                            <h4 style={{margin: "10px 0px", lineHeight: "1.35", fontWeight: "700", textAlign: "center", color: "rgb(17, 17, 17)", fontSize: "22px"}}>Sales
                            </h4>
                            <ul style={{listStyle: "none", textAlign: "center", margin: "0px", padding: "0px"}}>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Build a flexible CRM</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Organize all meeting notes</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Share a single playbook</li>
                            </ul>
                        </div>

                        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.1)", borderTop: "1px solid rgba(0, 0, 0, 0.1)", padding: "40px 20px"}}>
                            <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/marketing.png" alt="Mailbox with papers inside" style={{width: "160px", display: "block", margin: "0px auto"}}/>
                            <h4 style={{margin: "10px 0px", lineHeight: "1.35", fontWeight: "700", textAlign: "center", color: "rgb(17, 17, 17)", fontSize: "22px"}}>Marketing
                            </h4>
                            <ul style={{listStyle: "none", textAlign: "center", margin: "0px", padding: "0px"}}>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Make a style guide</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Track your content calendar</li>
                                <li style={{listStyle: "none", color: "rgba(0, 0, 0, 0.6)", margin: "0px", padding: "0px"}}>Keep tabs on everything</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    
            </div>


            {/* signin */}

            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{textAlign: "center"}}>
                    <h2 style={{marginTop: "0px", marginBottom: "0px", lineHeight: "1.25", fontWeight: "700", color: "rgb(17, 17, 17)", fontSize: "38px", letterSpacing: "-0.005em"}}>And connect the whole company</h2>
                    <p style={{color: "rgba(0, 0, 0, 0.6)", marginTop: "8px", fontSize: "20px"}}>No more context switching or silos.</p>
                </div>

                <div style={{width: "100%", maxWidth: "320px", display: "flex", alignItems: "center"}}>
                        <div class="notion-focusable" style={{display: "flex", alignItems: "center", width: "100%", fontSize: "15px", lineHeight: "26px", padding: "4px 10px", position: "relative", borderRadius: "3px", boxShadow: "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset", background: "white", cursor: "text", height: "36px", flex: "1 1 0%", marginRight: "8px"}}>
                            <input placeholder="Enter your email…" type="email" autoComplete="off" style={{fontSize: "inherit", lineHeight: "inherit", border: "none", background: "none", width: "100%", display: "block", resize: "none", padding: "0px"}}/>
                        </div>
                        <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", height: "36px", borderRadius: "3px", color: "white", fontSize: "14px", lineHeight: "1", paddingLeft: "12px", paddingRight: "12px", fontWeight: "500", background: "rgb(225, 98, 89)", border: "1px solid rgb(190, 86, 67)", boxShadow: "rgba(15, 15, 15, 0.1) 0px 1px 2px", textAlign: "center", width: "90px"}}>Sign up
                        </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Cards