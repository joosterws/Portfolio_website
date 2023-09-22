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
            <img src="/images/Sun.svg" alt="Dark Mode" style="width:30px;height:30px">
        </button>

        <button id="mobile-nav-toggle" class="mobile-nav-toggle">
            <img src="/images/Burger-menu.svg" alt="Menu" style="width:30px;height:30px">
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