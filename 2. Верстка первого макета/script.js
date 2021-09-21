class Dropdown {
  constructor(node) {
    this.node = node;

    if (!this.node) return;

    this.onLabel = this.onLabel.bind(this);

    this.label = this.node.querySelector(".dropdown__label");

    this.label.addEventListener("click", this.onLabel, false);
  }

  isOpen() {
    return this.node.classList.contains("dropdown_open");
  }

  onLabel() {
    this.isOpen() ? this.node.classList.remove("dropdown_open") : this.node.classList.add("dropdown_open");
  }
}

[...document.querySelectorAll(".futured-li")].forEach(node => new Dropdown(node));