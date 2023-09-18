class NavbarReuse extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <ul id="primary-navigation" data-visible="false" class="primary-navigation flex">
            <li>
                <a href="/index.html">Home</a>
            </li>
            <li>
                <a href="/HU_projects.html">HU projects</a>
            </li>
            <li>
                <a href="/my_history.html">My history</a>
            </li>
            <li>
                <div class="dropdown">
                    <a href="/SelfHosted/SelfHosted.html">Self Hosted</a>
                        <div class="dropdown-content">
                            <a href="/SelfHosted/unRaid.html">Unraid</a>
                            <a href="/SelfHosted/NextCloud.html">Nextcloud</a>
                            <a href="/SelfHosted/HomeAssistant.html">HomeAssistant</a>
                        </div>
                </div>
            </li>
        </ul>
        `
    }
}
customElements.define('app-navbar', NavbarReuse);



class SidebarReuse extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <ul class="SideList">
                <li>These are temporary placeholders.</li>
                <li><a href="https://www.facebook.com"><img src="/images/Social-SVG/facebook.svg" alt="Facebook icon"></a></li>
                <li><a href="https://www.twitter.com"><img src="/images/Social-SVG/twitter.svg"alt="Twitter icon"></a></li>
                <li><a href="https://www.instagram.com"><img src="/images/Social-SVG/instagram.svg"alt="Instagram icon"></a></li>
            </ul>
            `
    }
}
customElements.define('app-sidebar', SidebarReuse);


class HeaderButtonsReuse extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <button id="dark-mode-toggle" class="dark-mode-toggle">
            <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path fill="currentColor" d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" transform="translate(-8 -8)"/></svg>
        </button>

        <button id="mobile-nav-toggle" class="mobile-nav-toggle">
            <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/></svg>
        </button>
        `
    }
}
customElements.define('app-header-buttons', HeaderButtonsReuse);

class FooterReuse extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="social-links">
            <a href="https://www.facebook.com" target="_blank"><img src="/images/Social-SVG/facebook.svg" alt="Facebook icon" style="width:24px;height:24px"></a>
            <a href="https://www.twitter.com" target="_blank"><img src="/images/Social-SVG/twitter.svg" alt="Twitter icon" style="width:24px;height:24px"></a>
            <a href="https://www.instagram.com" target="_blank"><img src="/images/Social-SVG/instagram.svg" alt="Instagram icon" style="width:24px;height:24px"></a>
            <a href="https://www.linkedin.com/in/joost-sluijmer/" target="_blank"><img src="/images/Social-SVG/linkedin.svg" alt="Linkedin icon" style="width:24px;height:24px"></a>
        </div>
        <!-- <a href="cookies-policy.html">
            Cookies policy
        </a> -->
        `
    }
}
customElements.define('app-footer', FooterReuse);