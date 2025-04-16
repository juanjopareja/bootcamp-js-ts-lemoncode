import "./style.css";
import { extraerEnlacesImg } from "./ui";

const extractBtn = document.getElementById("btn-extract-img");

if (extractBtn && extractBtn instanceof HTMLButtonElement) {
    extractBtn.addEventListener("click", () => {
        extraerEnlacesImg();
    });
}

