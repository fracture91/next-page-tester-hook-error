import { getPage } from "next-page-tester"
import { screen } from "@testing-library/react"

describe("Homepage", () => {
  it("renders nicely", async () => {
    const { render } = await getPage({ route: "/", useDocument: true, useApp: true })
    render()
    expect(screen.getByText("Welcome to")).toBeVisible()
  })
})