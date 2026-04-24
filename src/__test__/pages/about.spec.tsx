import { render, screen, fireEvent } from "@testing-library/react"
import AboutPage from "@/pages/about"


describe("AboutPage", () => {
  it("renders about page correctly", () => {
    const page = render(<AboutPage />);
    // expect(screen.getByTestId("title").textContent).toBe("About Page")
    expect(page).toMatchSnapshot()
  });
});