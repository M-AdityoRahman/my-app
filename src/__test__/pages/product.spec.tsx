import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

//  mock router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/product",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

//  mock dynamic component
jest.mock("next/dynamic", () => () => (props: any) => (
  <div data-testid="tampilan-produk">
    {props.products?.length > 0 ? (
      props.products.map((p: any) => (
        <p key={p.id} data-testid="product-item">{p.name}</p>
      ))
    ) : (
      <p data-testid="empty-state">Tidak ada produk</p>
    )}
  </div>
))

describe("Product Page", () => {

  afterEach(() => {
    jest.resetModules()
  })

  //  1. SNAPSHOT TEST
  it("matches snapshot", async () => {
    jest.doMock("swr", () => ({
      __esModule: true,
      default: () => ({
        data: [],
        error: null,
        isLoading: false,
      }),
    }))

    const Page = (await import("@/pages/produk")).default
    const { asFragment } = render(<Page />)

    expect(asFragment()).toMatchSnapshot()
  })

  //  2. toBe()
  it("renders product count correctly", async () => {
    jest.doMock("swr", () => ({
      __esModule: true,
      default: () => ({
        data: [
          { id: "1", name: "A" },
          { id: "2", name: "B" },
        ],
        error: null,
        isLoading: false,
      }),
    }))

    const Page = (await import("@/pages/produk")).default
    render(<Page />)

    expect(screen.getAllByTestId("product-item").length).toBe(2)
  })

  //  3. getByTestId()
  it("renders empty state", async () => {
    jest.doMock("swr", () => ({
      __esModule: true,
      default: () => ({
        data: [],
        error: null,
        isLoading: false,
      }),
    }))

    const Page = (await import("@/pages/produk")).default
    render(<Page />)

    expect(screen.getByTestId("empty-state")).toBeInTheDocument()
  })

})