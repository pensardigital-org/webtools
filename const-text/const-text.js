class TextComponent extends HTMLElement {
  constructor() {
    super();
    this.textContentOriginal = null;
    if (this.hasAttribute("id") && this.textContent.trim()) {
      this.textContentOriginal = this.textContent.trim();
    }
  }

  connectedCallback() {
    const id = this.getAttribute("id");
    const originalElement = document.querySelector(`const-text[id="${id}"]`);
    const textToUse = this.textContentOriginal || (originalElement && originalElement.textContent.trim()) || "";
    const parentTag = this.parentElement.tagName.toLowerCase();

    // Se é uma definição (tem id e texto, e o pai não é um uso funcional), esconde
    if (this.textContentOriginal && parentTag !== "div" && parentTag !== "p") {
      this.style.display = "none"; // Esconde a definição
      return;
    }

    // Lógica para elementos que não são definições
    if (parentTag === "div") {
      this.parentElement.setAttribute("title", textToUse);
      this.textContent = "";
    } else {
      this.textContent = textToUse;
    }
  }
}