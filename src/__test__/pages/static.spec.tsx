import { render, screen } from "@testing-library/react"
import StaticPage from "@/pages/produk/static"
import "@testing-library/jest-dom"

describe("Static Page", () => {
  it("renders static products", () => {
    render(
      <StaticPage
        products={[
          { id: "1", name: "Static", price: 100, image: "", category: "test" },
        ]}
      />
    )

    expect(screen.getByText("Static")).toBeInTheDocument()
  })
})