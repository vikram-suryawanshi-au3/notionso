import React,{Fragment} from 'react'

class AllInOne extends React.Component{
    render(){
        return(
            <Fragment>

            
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


            <div style={{marginTop: "40px", marginBottom: "40px", paddingTop: "0px", paddingBottom: "0px"}}>
                <div>
                    <img src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/product/logo-strip-desktop-v1.png" alt="Customer logos" style={{display: "block", width: "100%", maxWidth: "940px", margin: "0px auto"}}/>
                </div>
            </div>

            <div style={{maxWidth: "1260px", margin: "0px auto"}}>
                <div style={{height: "1px", background: "rgba(0, 0, 0, 0.1)"}}>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default AllInOne