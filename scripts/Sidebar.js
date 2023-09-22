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