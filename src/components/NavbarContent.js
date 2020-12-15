import React from 'react'


class navbarContent extends React.Component{
    render(){
        return(
            <div>
            <nav style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: "1300px", paddingLeft: "20px", paddingRight: "20px", transition: "height 250ms ease 0s", height: "80px", position: "relative", overflow: "hidden", boxShadow: "none"}}>
                <div style={{flexShrink: "0"}}>
                    <a href="/product" rel="noopener noreferrer" style={{display: "block", textDecoration: "none", userSelect: "none", cursor: "pointer", color: "inherit"}}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <svg viewBox="0 0 120 126" class="notionLogo" style={{width: "30px", height: "30px", display: "block", fill: "inherit", flexShrink: "0",backfaceVisibility: "hidden", marginRight: "10px"}}>
                                <path d="M 20.6927 21.9315C 24.5836 25.0924 26.0432 24.8512 33.3492 24.3638L 102.228 20.2279C 103.689 20.2279 102.474 18.7705 101.987 18.5283L 90.5477 10.2586C 88.3558 8.55699 85.4356 6.60818 79.8387 7.09563L 13.1433 11.9602C 10.711 12.2014 10.2251 13.4175 11.1939 14.3924L 20.6927 21.9315ZM 24.8281 37.9835L 24.8281 110.456C 24.8281 114.351 26.7745 115.808 31.1553 115.567L 106.853 111.187C 111.236 110.946 111.724 108.267 111.724 105.103L 111.724 33.1169C 111.724 29.958 110.509 28.2544 107.826 28.4976L 28.721 33.1169C 25.8018 33.3622 24.8281 34.8225 24.8281 37.9835ZM 99.5567 41.8711C 100.042 44.0622 99.5567 46.2512 97.3618 46.4974L 93.7143 47.2241L 93.7143 100.728C 90.5477 102.43 87.6275 103.403 85.1942 103.403C 81.2983 103.403 80.3226 102.186 77.4044 98.54L 53.5471 61.087L 53.5471 97.3239L 61.0964 99.0275C 61.0964 99.0275 61.0964 103.403 55.0057 103.403L 38.2148 104.377C 37.727 103.403 38.2148 100.973 39.9179 100.486L 44.2996 99.2717L 44.2996 51.36L 38.2158 50.8725C 37.728 48.6815 38.9431 45.5225 42.3532 45.2773L 60.3661 44.0631L 85.1942 82.0036L 85.1942 48.4402L 78.864 47.7136C 78.3781 45.0351 80.3226 43.0902 82.7569 42.849L 99.5567 41.8711ZM 7.5434 5.39404L 76.9175 0.285276C 85.4366 -0.445402 87.6285 0.0440428 92.983 3.93368L 115.128 19.4982C 118.782 22.1747 120 22.9034 120 25.8211L 120 111.187C 120 116.537 118.051 119.701 111.237 120.185L 30.6734 125.05C 25.5584 125.294 23.124 124.565 20.4453 121.158L 4.13735 99.9994C 1.21516 96.1048 0 93.191 0 89.7819L 0 13.903C 0 9.5279 1.94945 5.8785 7.5434 5.39404Z">
                                </path>
                            </svg>
                                <div style={{fontWeight: "500", fontSize: "16px"}}>Notion</div>
                        </div>
                    </a>
                </div>
                <div style={{flex: "1 1 0%", display: "flex", justifyContent: "center"}}>
                </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%", transition: "transform 200ms ease 0s"}}>
                <div>
                    <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
                        <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "default", padding: "4px 10px", borderRadius: "3px", flexShrink: "0", fontSize: "15px", marginLeft: "2px", marginRight: "2px", fontWeight: "500", width: "auto"}}>
                            <div style={{display: "flex", alignItems: "center", cursor: "default"}}>Product
                                <svg viewBox="0 0 30 30" class="chevronDown" style={{width: "10px", height: "100%", display: "block", fill: "rgb(66, 66, 65)", flexShrink: "0", backfaceVisibility: "hidden", marginLeft: "4px", marginTop: "1px"}}>
                                    <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 ">
                                    </polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div>
                    <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
                        <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "default", padding: "4px 10px", borderRadius: "3px", flexShrink: "0", fontSize: "15px", marginLeft: "2px", marginRight: "2px", fontWeight: "500", width: "auto"}}>
                            <div style={{display: "flex", alignItems: "center", cursor: "default"}}>Download
                                <svg viewBox="0 0 30 30" class="chevronDown" style={{width: "10px", height: "100%", display: "block", fill: "rgb(66, 66, 65)", flexShrink: "0", backfaceVisibility: "hidden", marginLeft: "4px", marginTop: "1px"}}>
                                    <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 ">
                                    </polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
                        <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "default", padding: "4px 10px", borderRadius: "3px", flexShrink: "0", fontSize: "15px", marginLeft: "2px", marginRight: "2px", fontWeight: "500", width: "auto"}}>
                            <div style={{display: "flex", alignItems: "center", cursor: "default"}}>Resources
                                <svg viewBox="0 0 30 30" class="chevronDown" style={{width: "10px", height: "100%", display: "block", fill: "rgb(66, 66, 65)", flexShrink: "0", backfaceVisibility: "hidden", marginLeft: "4px", marginTop: "1px"}}>
                                    <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 ">
                                    </polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


                <a href="/pricing" rel="noopener noreferrer" style={{display: "block", textDecoration: "none", userSelect: "none", cursor: "pointer", color: "inherit"}}>
                    <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", padding: "4px 10px", borderRadius: "3px", flexShrink: "0", fontSize: "15px", marginLeft: "2px", marginRight: "2px", fontWeight: "500", width: "auto"}}>Pricing
                    </div>
                </a>

                <a href="/careers" rel="noopener noreferrer" style={{display: "block", textDecoration: "none", userSelect: "none", cursor: "pointer", color: "inherit"}}>
                    <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", padding: "4px 10px", borderRadius: "3px", flexShrink: "0", fontSize: "15px", marginLeft: "2px", marginRight: "2px", fontWeight: "500", width: "auto"}}>Careers
                    </div>
                </a>

            </div>

            <div style={{borderRight: "1px solid rgb(221, 221, 221)", height: "14px", marginLeft: "10px", marginRight: "10px"}}>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%",transition: "transform 200ms ease 0s"}}>
                <a href="/login" rel="noopener noreferrer" style={{display: "block", textDecoration: "none", userSelect: "none", cursor: "pointer", color: "inherit"}}>
                    <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", padding: "4px 10px", borderRadius: "3px", flexShrink: "0", fontSize: "15px", marginLeft: "2px", marginRight: "2px", fontWeight: "500", width: "auto"}}>Log in
                    </div>
                </a>

                <a href="/signup" rel="noopener noreferrer" style={{display: "block", textDecoration: "none", userSelect: "none", cursor: "pointer", color: "inherit"}}>
                    <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", padding: "4px 10px", borderRadius: "3px", flexShrink: "0", fontSize: "15px", marginLeft: "2px", marginRight: "2px", fontWeight: "500", width: "auto"}}>Sign up
                    </div>
                </a>
            </div>

            <div style={{transition: "opacity 250ms ease 0s", width: "0px", opacity: "0", overflow: "hidden"}}>
                <div style={{width: "280px"}}>
                    <div style={{width: "100%", maxWidth: "320px", display: "flex", alignItems: "center"}}>
                        <div class="notion-focusable" style={{display: "flex", alignItems: "center", width: "100%", fontSize: "15px", lineHeight: "26px", padding: "4px 10px", position: "relative", borderRadius: "3px", boxShadow: "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset", background: "white", cursor: "text", height: "36px", flex: "1 1 0%", marginRight: "8px"}}>
                            <input placeholder="Enter your email…" type="email" autoComplete="off" style={{fontSize: "inherit", lineHeight: "inherit", border: "none", background: "none", width: "100%", display: "block", resize: "none", padding: "0px"}}/>
                            
                        </div>

                        <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", height: "36px", borderRadius: "3px", color: "white", fontSize: "14px", lineHeight: "1", paddingLeft: "12px", paddingRight: "12px", fontWeight: "500", background: "rgb(225, 98, 89)", border: "1px solid rgb(190, 86, 67)", boxShadow: "rgba(15, 15, 15, 0.1) 0px 1px 2px", textAlign: "center", width: "80px"}}>Sign up
                        </div>
                    </div>
                </div>
            </div>
            </nav>

            {/* main > section > div > div */}

            <div style={{marginTop: "60px"}}>
                <div style={{marginTop: "20px", marginBottom: "20px", paddingTop: "0px", paddingBottom: "0px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div style={{width: "100%", maxWidth: "500px", margin: "0px auto", display: "block"}}>
                        <div style={{width: "100%", position: "relative", overflow: "hidden", margin: "0px auto"}}>
                            <div style={{paddingTop: "41%", height: "0px"}}>
                            <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/product/hero.png" alt="People using Notion" style={{display: "block", width: "100%", position: "absolute", top: "0px", left: "0px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: "20px", marginBottom: "20px", paddingTop: "0px", paddingBottom: "0px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div>
                    <h1 style={{marginTop: "0px", marginBottom: "0px", lineHeight: "1.1", fontWeight: "700", textAlign: "center", color: "rgb(17, 17, 17)", fontSize: "74px", letterSpacing: "-0.025em"}}>All-in-one workspace
                    </h1>
                    </div>

                    <h2 style={{marginTop: "10px", textAlign: "center", fontWeight: "normal", fontSize: "20px", color: "rgba(0, 0, 0, 0.6)", lineHeight: "1.5"}}>One tool for your whole team. Write, plan, and get organized.
                    </h2>

                    <div style={{width: "100%", maxWidth: "360px", display: "flex", alignItems: "center"}}>
                        <div class="notion-focusable" style={{display: "flex", alignItems: "center", width: "100%", fontSize: "15px", lineHeight: "26px", padding: "4px 10px", position: "relative", borderRadius: "3px", boxShadow: "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset", background: "white", cursor: "text", height: "36px", flex: "1 1 0%", marginRight: "8px"}}>
                            <input placeholder="Enter your email…" type="email" autoComplete="off" style={{fontSize: "inherit", lineHeight: "inherit", border: "none", background: "none", width: "100%", display: "block", resize: "none", padding: "0px"}}/>
                        </div>

                        <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", height: "36px", borderRadius: "3px", color: "white", fontSize: "14px", lineHeight: "1", paddingLeft: "12px", paddingRight: "12px", fontWeight: "500", background: "rgb(225, 98, 89)", border: "1px solid rgb(190, 86, 67)", boxShadow: "rgba(15, 15, 15, 0.1) 0px 1px 2px", textAlign: "center", width: "90px"}}>Sign up
                        </div>
                    </div>

                    <div style={{color: "rgba(0, 0, 0, 0.4)", fontSize: "14px; margin-top: 10px"}}>For teams &amp; individuals — web, mobile, Mac, Windows.
                    </div>
                </div>
            </div>

            {/* third */}

            <div style={{overflow: "hidden", background: "rgb(249, 245, 241)", border: "1px solid transparent", marginLeft: "-40px", marginRight: "-40px"}}>
                <div style={{overflow: "hidden"}}>
                    <div style={{display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: "40px"}}>
                        <div class="" role="button" tabIndex="1" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", display: "flex", alignItems: "center", flexDirection: "column", borderRadius: "4px", margin:"0px"}}>
                            <div style={{fontSize: "15px", paddingTop: "10px", paddingBottom: "10px", margin: "0px 15px", textAlign: "center", whiteSpace: "nowrap", fontWeight: "500", backgroundImage: "linear-gradient(to right, black 0%, black 100%)", backgroundRepeat: "repeat-x", backgroundPosition: "0px 100%", backgroundSize: "100% 2px"}}>
                                <span style={{fontSize: "18px", lineHeight: "0", position: "relative", top: "1px"}}>📘</span> Team wiki
                            </div>
                        </div>

                        <div class="" role="button" tabIndex="2" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", display: "flex", alignItems: "center", flexDirection: "column", borderRadius: "4px", margin:"0px"}}>
                            <div style={{fontSize: "15px", paddingTop: "10px", paddingBottom: "10px", margin: "0px 15px", textAlign: "center", whiteSpace: "nowrap", fontWeight: "500", backgroundImage: "linear-gradient(to right, black 0%, black 100%)", backgroundRepeat: "repeat-x", backgroundPosition: "0px 100%", backgroundSize: "100% 2px"}}>
                                <span style={{fontSize: "18px", lineHeight: "0", position: "relative", top: "1px"}}>🎒</span> Projects &amp; tasks
                            </div>
                        </div>

                        <div class="" role="button" tabIndex="3" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", display: "flex", alignItems: "center", flexDirection: "column", borderRadius: "4px", margin:"0px"}}>
                            <div style={{fontSize: "15px", paddingTop: "10px", paddingBottom: "10px", margin: "0px 15px", textAlign: "center", whiteSpace: "nowrap", fontWeight: "500", backgroundImage: "linear-gradient(to right, black 0%, black 100%)", backgroundRepeat: "repeat-x", backgroundPosition: "0px 100%", backgroundSize: "100% 2px"}}>
                                <span style={{fontSize: "18px", lineHeight: "0", position: "relative", top: "1px"}}>✍️</span> Notes &amp; docs
                            </div>
                        </div>
                    </div>

                    <div style={{marginBottom: "40px"}}>
                        <div style={{width: "100vw", overflowX: "scroll", padding: "40px", marginTop: "-40px", marginBottom: "-40px"}}>
                            <div style={{width: "100%", paddingRight: "40px"}}>
                                <div style={{display: "flex", flexDirection: "row-reverse"}}>

                                    <div style={{width: "140%"}}>
                                        <div style={{borderRadius: "6px", overflow: "hidden", position: "relative", background: "white", boxShadow: "rgba(84, 70, 35, 0.15) 0px 2px 8px, rgba(84, 70, 35, 0.15) 0px 1px 3px, rgba(255, 255, 255, 0.5) 0px 0px 0px 1px"}}>
                                            <div style={{width: "100%", position: "relative", overflow: "hidden", margin: "0px auto"}}>
                                                <div style={{paddingTop: "62.5%", height:"0px"}}>
                                                    <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/work/carousel-desktop/wiki-v5/en-US.png" alt="" class="front-fadein-slow" style={{display: "block", width: "100%", position: "absolute", top:"0px", left:"0px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{width: "46%", marginRight: "20px"}}>
                                        <div style={{position: "relative", transform: "translateZ(0px)", width: "100%", filter: "drop-shadow(rgba(15, 15, 15, 0.2) 0px 6px 12px)"}}>
                                            <img alt="" src="https://www.notion.so/front/devices/iphone-x-frame.png" style={{width: "100%", display: "block", position: "relative", zIndex: "2"}}/>
                                            <div style={{position: "absolute", top: "50%", left: "50%", background: "white", transform: "translate(-50%, -50%)", width: "84.5%", height: "95%"}}>
                                                <img alt="" class="notion-fadein-slow" src="https://www.notion.so/front/work/carousel-mobile/wiki-v5/en-US.png" style={{width: "100%"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* add */}

            <div style={{marginTop: "40px", marginBottom: "40px", paddingTop: "0px", paddingBottom: "0px"}}>
                <div>
                    <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/product/logo-strip-desktop-v1.png" alt="Customer logos" style={{display: "block", width: "100%", maxWidth: "940px", margin: "0px auto"}}/>
                </div>
            </div>

            <div style={{maxWidth: "1260px", margin: "0px auto"}}>
                <div style={{height: "1px", background: "rgba(0, 0, 0, 0.1)"}}>
                </div>
            </div>

            {/* cards */}

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

            {/* three details */}

            <div style={{width: "100%", maxWidth: "940px", margin: "0px auto"}}>
                <div style={{maxWidth: "100%"}}>
                    {/* one */}
                    <div style={{marginTop: "80px", marginBottom: "80px", paddingTop: "0px", paddingBottom: "0px"}}>
                        <div class="analytics-scroll-point" id="use_case_wikis">
                        </div>
                            <div style={{display: "flex"}}>
                                <div style={{display: "flex", alignItems: "flex-end", paddingBottom: "20px", width: "420px"}}>
                                    <div style={{fontSize: "110px", fontWeight: "700", lineHeight: "1", marginRight: "20px"}}>1
                                    </div>
                                    <div style={{marginBottom: "10px"}}>
                                        <h2 style={{marginTop: "0px", marginBottom: "5px", lineHeight: "1.25", fontWeight: "700", color: "rgb(17, 17, 17)", fontSize: "30px"}}>Team wiki
                                        </h2>
                                        <div style={{color: "rgba(0, 0, 0, 0.6)", margin: "0px", lineHeight: "150%", maxWidth: "550px"}}>Turn your tribal knowledge into 
                                        <span style={{whiteSpace: "nowrap"}}>easy-to-find</span> answers.
                                        </div>
                                    </div>
                                </div>

                                <div style={{width: "260px"}}>
                                    <img src="https://www.notion.so/front/shared/illustrations/use-case-wiki.png" style={{width: "160px", display: "block", margin: "0px auto"}} alt=""/>
                                </div>

                                <div style={{display: "flex", alignItems: "flex-end", paddingBottom: "30px", width: "280px"}}>
                                    <div>
                                        <div style={{fontSize: "15px", color: "rgba(0, 0, 0, 0.4)", marginBottom: "7px"}}>Replaces
                                        </div>
                                        <div>
                                            <img src="https://www.notion.so/front/shared/replaces/wikis.png" alt="Logos of replaced software" style={{display: "block", height: "22px"}}/>
                                        </div>
                                    </div>
                                </div>
                                </div>

                            <div style={{borderRadius: "6px", overflow: "hidden", position: "relative", background: "white", boxShadow: "rgba(84, 70, 35, 0.15) 0px 2px 8px, rgba(84, 70, 35, 0.15) 0px 1px 3px, rgba(255, 255, 255, 0.5) 0px 0px 0px 1px"}}>
                                <video width="960" height="600" autoPlay playsInline loop style={{width: "100%", height: "auto", display: "block"}}>
                                    <source src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/benefits/desktop/company-home/en-US.mp4" type="video/mp4"/>
                                </video>
                            </div>
                    </div>

                    {/* two */}
                    <div style={{marginTop: "80px", marginBottom: "80px", paddingTop: "0px", paddingBottom: "0px"}}>
                        <div class="analytics-scroll-point" id="use_case_tasks">
                        </div>
                            <div style={{display: "flex"}}>
                                <div style={{display: "flex", alignItems: "flex-end", paddingBottom: "20px", width: "420px"}}>
                                    <div style={{fontSize: "110px", fontWeight: "700", lineHeight: "1", marginRight: "20px"}}>2
                                    </div>
                                    <div style={{marginBottom: "10px"}}>
                                        <h2 style={{marginTop: "0px", marginBottom: "5px", lineHeight: "1.25", fontWeight: "700", color: "rgb(17, 17, 17)", fontSize: "30px"}}>Projects &amp; tasks
                                        </h2>
                                        <div style={{color: "rgba(0, 0, 0, 0.6)", margin: "0px", lineHeight: "150%", maxWidth: "550px"}}>Kanban boards, tables, lists, and more. Customize any workflow.
                                        </div>
                                    </div>
                                </div>

                                <div style={{width: "260px"}}>
                                    <img src="https://www.notion.so/front/shared/illustrations/use-case-database.png" style={{width: "160px", display: "block", margin: "0px auto"}} alt=""/>
                                </div>

                                <div style={{display: "flex", alignItems: "flex-end", paddingBottom: "30px", width: "280px"}}>
                                    <div>
                                        <div style={{fontSize: "15px", color: "rgba(0, 0, 0, 0.4)", marginBottom: "7px"}}>Replaces
                                        </div>
                                        <div>
                                            <img src="https://www.notion.so/front/shared/replaces/tasks.png" alt="Logos of replaced software" style={{display: "block", height: "22px"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div style={{borderRadius: "6px", overflow: "hidden", position: "relative", background: "white", boxShadow: "rgba(84, 70, 35, 0.15) 0px 2px 8px, rgba(84, 70, 35, 0.15) 0px 1px 3px, rgba(255, 255, 255, 0.5) 0px 0px 0px 1px"}}>
                            <video width="960" height="600" autoPlay playsInline loop style={{width: "100%", height: "auto", display: "block"}}>
                                <source src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/benefits/desktop/roadmap/en-US.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>

                    {/* three */}
                    <div style={{marginTop: "80px", marginBottom: "80px", paddingTop: "0px", paddingBottom: "0px"}}>
                        <div class="analytics-scroll-point" id="use_case_notes">
                        </div>
                            <div style={{display: "flex"}}>
                                <div style={{display: "flex", alignItems: "flex-end", paddingBottom: "20px", width: "420px"}}>
                                    <div style={{fontSize: "110px", fontWeight: "700", lineHeight: "1", marginRight: "20px"}}>3
                                    </div>
                                    <div style={{marginBottom: "10px"}}>
                                        <h2 style={{marginTop: "0px", marginBottom: "5px", lineHeight: "1.25", fontWeight: "700", color: "rgb(17, 17, 17)", fontSize: "30px"}}>Notes &amp; docs
                                        </h2>
                                        <div style={{color: "rgba(0, 0, 0, 0.6)", margin: "0px", lineHeight: "150%", maxWidth: "550px"}}>Systems that keep notes organized. Add any type of content.
                                        </div>
                                    </div>
                                </div>

                                <div style={{width: "260px"}}>
                                    <img src="https://www.notion.so/front/shared/illustrations/use-case-note.png" style={{width: "160px", display: "block", margin: "0px auto"}} alt=""/>
                                </div>

                                <div style={{display: "flex", alignItems: "flex-end", paddingBottom: "30px", width: "280px"}}>
                                    <div>
                                        <div style={{fontSize: "15px", color: "rgba(0, 0, 0, 0.4)", marginBottom: "7px"}}>Replaces
                                        </div>
                                        <div>
                                            <img src="https://www.notion.so/front/shared/replaces/notes.png" alt="Logos of replaced software" style={{display: "block", height: "22px"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div style={{borderRadius: "6px", overflow: "hidden", position: "relative", background: "white", boxShadow: "rgba(84, 70, 35, 0.15) 0px 2px 8px, rgba(84, 70, 35, 0.15) 0px 1px 3px, rgba(255, 255, 255, 0.5) 0px 0px 0px 1px"}}>
                            <video width="960" height="600" autoPlay playsInline loop style={{width: "100%", height: "auto", display: "block"}}>
                                <source src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/benefits/desktop/meeting-notes/en-US.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* signup */}
            <div style={{marginTop: "40px", marginBottom: "40px", paddingTop: "0px", paddingBottom: "0px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{marginBottom: "10px"}}>
                    <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/templates.png" style={{width: "550px", maxWidth: "100%"}} alt=""/>
                </div>

                <div style={{textAlign: "center"}}>
                    <h2 style={{marginTop: "0px", marginBottom: "0px", lineHeight: "1.25", fontWeight: "700", color: "rgb(17, 17, 17)", fontSize: "38px", letterSpacing: "-0.005em"}}>Trusted by teams of 20 to 2,000</h2>
                    <p style={{color: "rgba(0, 0, 0, 0.6)", marginTop: "8px", fontSize: "20px"}}>
                        <a href="/customers" rel="noopener noreferrer" class="notion-link" style={{display: "inline", textDecoration: "underline", userSelect: "none", cursor: "pointer", color: "inherit"}}>Our customers
                    </a> range from startups to Fortune 500 companies.
                    </p>
                </div>
                
                <div style={{width: "100%", maxWidth: "320px", display: "flex", alignItems: "center"}}>
                    <div class="notion-focusable" style={{display: "flex", alignItems: "center", width: "100%", fontSize: "15px", lineHeight: "26px", padding: "4px 10px", position: "relative", borderRadius: "3px", boxShadow: "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset", background: "white", cursor: "text", height: "36px", flex: "1 1 0%", marginRight: "8px"}}>
                        <input placeholder="Enter your email…" type="email" autoComplete="off" style={{fontSize: "inherit", lineHeight: "inherit", border: "none", background: "none", width: "100%", display: "block", resize: "none", padding: "0px"}}/>
                    </div>
                    <div class="" role="button" tabIndex="0" style={{userSelect: "none", transition: "background 20ms ease-in 0s", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", height: "36px", borderRadius: "3px", color: "white", fontSize: "14px", lineHeight: "1", paddingLeft: "12px", paddingRight: "12px", fontWeight: "500", background: "rgb(225, 98, 89)", border: "1px solid rgb(190, 86, 67)", boxShadow: "rgba(15, 15, 15, 0.1) 0px 1px 2px", textAlign: "center", width: "90px"}}>Sign up
                    </div>
                </div>
            </div>



        </div>
        )
    }
}

export default navbarContent