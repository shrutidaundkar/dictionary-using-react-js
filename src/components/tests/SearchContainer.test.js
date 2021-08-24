import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../../App";

test('Search Menu is rendered, clicked and mounted', () => {
    render(<App />)
    const navElement = screen.getByText(/Search/i);
    expect(navElement).toBeInTheDocument();
    
    const search = screen.getByText(/Search/i);
    expect(search).toBeInTheDocument();

    fireEvent.click(search)

})