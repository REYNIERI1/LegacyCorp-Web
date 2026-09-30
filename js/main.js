// ======================================================
// LEGACYCORP - MAIN.JS
// ======================================================

"use strict";

// ======================================================
// 1. CONFIGURACIÓN GENERAL
// ======================================================

// Datos de contacto.
// Los completaremos cuando definamos los datos oficiales.
const LEGACYCORP_EMAIL = "";
const LEGACYCORP_WHATSAPP = "";
const LEGACYCORP_ADDRESS = "Tegucigalpa, Honduras";

// Formulario público de evaluación IT
const LEGACYCORP_EVALUATION_FORM_URL =
    "https://forms.gle/miVNqp67Mh32M5Fe6";


// ======================================================
// 2. CUANDO LA PÁGINA TERMINE DE CARGAR
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("LegacyCorp Web cargado correctamente.");

    configurarCopyright();

    configurarBotonesEvaluacion();

    configurarMenuMovil();

    configurarScrollSuave();

});


// ======================================================
// 3. COPYRIGHT AUTOMÁTICO
// ======================================================

function configurarCopyright() {

    const yearElement = document.querySelector("#currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

}


// ======================================================
// 4. BOTONES DE EVALUACIÓN IT
// ======================================================

function configurarBotonesEvaluacion() {

    /*
        Cualquier botón o enlace que tenga:

        class="evaluation-link"

        abrirá automáticamente el Google Form.
    */

    const botones = document.querySelectorAll(".evaluation-link");

    botones.forEach((boton) => {

        boton.setAttribute(
            "href",
            LEGACYCORP_EVALUATION_FORM_URL
        );

        boton.setAttribute("target", "_blank");

        boton.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });

}


// ======================================================
// 5. MENÚ MÓVIL
// ======================================================

function configurarMenuMovil() {

    const menuButton = document.querySelector(".menu-toggle");

    const navigation = document.querySelector(".nav-links");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

        const abierto =
            navigation.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            abierto ? "true" : "false"
        );

    });


    // Cerrar menú después de seleccionar una opción
    const links = navigation.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// ======================================================
// 6. SCROLL SUAVE
// ======================================================

function configurarScrollSuave() {

    const enlaces =
        document.querySelectorAll('a[href^="#"]');

    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", (event) => {

            const destino =
                enlace.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const elemento =
                document.querySelector(destino);

            if (!elemento) {
                return;
            }

            event.preventDefault();

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}


// ======================================================
// 7. FUNCIONES DE CONTACTO
// ======================================================

function obtenerEmailLegacyCorp() {

    return LEGACYCORP_EMAIL;

}


function obtenerWhatsAppLegacyCorp() {

    return LEGACYCORP_WHATSAPP;

}


function obtenerDireccionLegacyCorp() {

    return LEGACYCORP_ADDRESS;

}


// ======================================================
// 8. FUNCIÓN PARA ABRIR FORMULARIO MANUALMENTE
// ======================================================

function abrirFormularioEvaluacion() {

    window.open(
        LEGACYCORP_EVALUATION_FORM_URL,
        "_blank",
        "noopener,noreferrer"
    );

}


// ======================================================
// FIN MAIN.JS
// ======================================================
// ============================================================
// LEGACYCORP - SELECTOR DE TEMA
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    const themeButtons = document.querySelectorAll(".theme-btn");

    // Recuperar tema guardado.
    // Si nunca se ha seleccionado uno, usamos el tema claro.
    const savedTheme = localStorage.getItem("legacycorp-theme") || "light";

    // Aplicar tema al cargar la página
    applyTheme(savedTheme);

    // Detectar clic en los botones
    themeButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedTheme = button.dataset.theme;

            applyTheme(selectedTheme);

            // Guardar preferencia
            localStorage.setItem(
                "legacycorp-theme",
                selectedTheme
            );

        });

    });


    // ========================================================
    // FUNCIÓN PARA CAMBIAR EL TEMA
    // ========================================================

    function applyTheme(theme) {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

        // Quitar estado activo de todos los botones
        themeButtons.forEach((button) => {
            button.classList.remove("active");
        });

        // Marcar el botón correspondiente
        const activeButton =
            document.querySelector(
                `.theme-btn[data-theme="${theme}"]`
            );

        if (activeButton) {
            activeButton.classList.add("active");
        }

    }

});