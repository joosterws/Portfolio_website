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