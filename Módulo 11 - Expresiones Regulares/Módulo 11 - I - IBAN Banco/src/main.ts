import "./style.css";
import { comprobarIBAN } from "./ui";

const validarBtn = document.getElementById("btn-validate-iban");

if (validarBtn && validarBtn instanceof HTMLButtonElement) {
    validarBtn.addEventListener("click", () => {
        comprobarIBAN();
    });
}
