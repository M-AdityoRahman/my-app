import { render, screen } from "@testing-library/react"
import ServerPage from "@/pages/produk/server"
import "@testing-library/jest-dom"

describe("Server Page", () => {
  it("renders products", () => {
    render(
      <ServerPage
        products={[
          { id: "1", name: "Server Product", price: 100, image: "", category: "test" },
        ]}
      />
    )

    expect(screen.getByText("Server Product")).toBeInTheDocument()
  })
})