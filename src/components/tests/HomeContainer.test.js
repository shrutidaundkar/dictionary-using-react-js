import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../../App";

test('Home Menu is rendered, clicked and mounted', () => {
    render(<App />)
    const navElement = screen.getByText(/Home/i);
    expect(navElement).toBeInTheDocument();
    fireEvent.click(navElement)
    const welcomeText = screen.getByText(/clearly/i);
    expect(welcomeText).toBeInTheDocument();
})
