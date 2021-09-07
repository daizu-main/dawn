class SleepinkCartRemove extends HTMLElement {
  constructor() {
    super()
    this.addEventListener("click", (event) => {
      event.preventDefault()
      this.closest("cart-items").updateQuantity(this.dataset.index, 0)
    })
  }
}

customElements.define("sleepink-cart-remove", SleepinkCartRemove)
/*
class SleepinkCartItems extends HTMLElement {
  constructor() {
    super()

    this.lineItemStatusElement = document.getElementById(
      "shopping-cart-line-item-status"
    )

    this.currentItemCount = Array.from(
      this.querySelectorAll('[name="updates[]"]')
    ).reduce((total, quantityInput) => total + parseInt(quantityInput.value), 0)

    this.debouncedOnChange = debounce((event) => {
      this.onChange(event)
    }, 300)

    this.addEventListener("change", this.debouncedOnChange.bind(this))
  }

  onChange(event) {
    this.updateQuantity(
      event.target.dataset.index,
      event.target.value,
      document.activeElement.getAttribute("name")
    )
  }

  getSectionsToRender() {
    return [
      {
        id: "main-cart-items",
        section: document.getElementById("main-cart-items").dataset.id,
        selector: ".js-contents",
      },
      {
        id: "cart-icon-bubble",
        section: "cart-icon-bubble",
        selector: ".shopify-section",
      },
      {
        id: "cart-live-region-text",
        section: "cart-live-region-text",
        selector: ".shopify-section",
      },
      {
        id: "main-cart-footer",
        section: document.getElementById("main-cart-footer").dataset.id,
        selector: ".js-contents2",
      },
    ]
  }

  updateQuantity(line, quantity, name) {
    this.enableLoading(line)

    const body = JSON.stringify({
      line,
      quantity,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname,
    })

    fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
      .then((response) => {
        return response.text()
      })
      .then((state) => {
        const parsedState = JSON.parse(state)
        console.dir(parsedState)
        this.classList.toggle("is-empty", parsedState.item_count === 0)
        const cartFooter = document.getElementById("main-cart-footer")

        if (cartFooter)
          cartFooter.classList.toggle("is-empty", parsedState.item_count === 0)

        this.getSectionsToRender().forEach((section, index) => {
          const elementToReplace =
            document
              .getElementById(section.id)
              .querySelector(section.selector) ||
            document.getElementById(section.id)

          if (index !== 3) {
            elementToReplace.innerHTML = this.getSectionInnerHTML(
              parsedState.sections[section.section],
              section.selector
            )
          }
        })

        this.updateLiveRegions(line, parsedState.item_count)
        const { items_subtotal_price: subtotal } = parsedState
        const formattedSubtotal = (subtotal / 100).toFixed(2).replace(".", ",")
        const shipping = subtotal < 2900 && subtotal > 0 ? 380 : 0
        const formattedShipping = (shipping / 100).toFixed(2).replace(".", ",")
        const total = subtotal + shipping
        const formattedTotal = (total / 100).toFixed(2).replace(".", ",")
        document.getElementById("subtotal").innerHTML = formattedSubtotal
        document.getElementById("shipping").innerHTML = formattedShipping
        document.getElementById("totalPrice").innerHTML = `${formattedTotal} €`
        if (parsedState.item_count == 0) {
          document.getElementById("checkoutLink").classList.add("disable-link")
          document.getElementById("checkoutLink").href = ""
        } else {
          const productString = parsedState.items
            .filter((item) => item.quantity > 0)
            .map((item) => `${item.id}:${item.quantity}`)
            .join(",")
          const shopUrl = {{ shop.url | escape }}
          document.getElementById(
            "checkoutLink"
          ).href = `https://sleep-ink.myshopify.com/cart/${productString}`
          document
            .getElementById("checkoutLink")
            .classList.remove("disable-link")
        }
        const lineItem = document.getElementById(`CartItem-${line}`)
        if (lineItem) lineItem.querySelector(`[name="${name}"]`).focus()
        this.disableLoading()
      })
      .catch(() => {
        this.querySelectorAll(".loading-overlay").forEach((overlay) =>
          overlay.classList.add("hidden")
        )
        document.getElementById("cart-errors").textContent =
          window.cartStrings.error
        this.disableLoading()
      })
  }

  updateLiveRegions(line, itemCount) {
    if (this.currentItemCount === itemCount) {
      // document
      //   .getElementById(`Line-item-error-${line}`)
      //   .querySelector(".cart-item__error-text").innerHTML =
      //   window.cartStrings.quantityError.replace(
      //     "[quantity]",
      //     document.getElementById(`Quantity-${line}`).value
      //   )
      document.querySelector("#item-count").innerHTML = itemCount
    }

    this.currentItemCount = itemCount
    this.lineItemStatusElement.setAttribute("aria-hidden", true)

    const cartStatus = document.getElementById("cart-live-region-text")
    cartStatus.setAttribute("aria-hidden", false)

    document.querySelector("#item-count").innerHTML = itemCount

    setTimeout(() => {
      cartStatus.setAttribute("aria-hidden", true)
    }, 1000)
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser()
      .parseFromString(html, "text/html")
      .querySelector(selector).innerHTML
  }

  enableLoading(line) {
    document
      .getElementById("main-cart-items")
      .classList.add("cart__items--disabled")
    this.querySelectorAll(`#CartItem-${line} .loading-overlay`).forEach(
      (overlay) => overlay.classList.remove("hidden")
    )
    document.activeElement.blur()
    this.lineItemStatusElement.setAttribute("aria-hidden", false)
  }

  disableLoading() {
    document
      .getElementById("main-cart-items")
      .classList.remove("cart__items--disabled")
  }
}

customElements.define("sleepink-cart-items", SleepinkCartItems)
*/
