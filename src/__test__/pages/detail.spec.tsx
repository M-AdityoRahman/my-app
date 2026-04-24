import { render, screen } from "@testing-library/react"
import DetailPage from "@/pages/produk/[produk]"
import "@testing-library/jest-dom"

describe("Detail Page", () => {
  it("renders product detail", () => {
    render(
      <DetailPage
        product={{
          id: "1",
          name: "Detail Product",
          price: 100,
          image: "",
          category: "test",
        }}
      />
    )

    expect(screen.getByText("Detail Product")).toBeInTheDocument()
  })
})