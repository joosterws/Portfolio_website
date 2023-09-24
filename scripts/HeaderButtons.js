class HeaderButtonsReuse extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <button id="dark-mode-toggle" class="dark-mode-toggle">
            <img src="/images/Sun.svg" title="Dark mode" alt="Dark Mode" style="width:30px;height:30px">
        </button>

        <button id="mobile-nav-toggle" class="mobile-nav-toggle">
            <img src="/images/Burger-menu.svg" title="Menu" alt="Menu" style="width:30px;height:30px">
        </button>
        `
    }
}
customElements.define('app-header-buttons', HeaderButtonsReuse);