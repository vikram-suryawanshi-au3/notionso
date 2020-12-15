import React from 'react'

class Navbar extends React.Component{
    render(){
        return(
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
        )
    }
}

export default Navbar