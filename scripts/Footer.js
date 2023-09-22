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