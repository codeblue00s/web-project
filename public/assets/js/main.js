import { loadComponent } from "./cmp-loader";

document.addEventListener ('DOMContentLoaded', () =>{
    loadComponent('/assets/cmp/navbar.html', 'navbar-container')
        .catch(err => console.error("Falha ao carregar a navbar:", err));
});