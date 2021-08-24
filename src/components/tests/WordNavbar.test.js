import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../../App";

test('Home Menu is rendered', () => {
  render(<App />)
  const navElement = screen.getByText(/Home/i);
  expect(navElement).toBeInTheDocument();
})

test('Home Menu is rendered and clickable', () => {
    render(<App />)
    const navElement = screen.getByText(/Home/i);
    expect(navElement).toBeInTheDocument();
    fireEvent.click(navElement)
    const welcomeText = screen.getByText(/clearly/i);
    expect(welcomeText).toBeInTheDocument();
})

test('Search Menu is rendered', () => {
  render(<App />)
  const navElement = screen.getByText(/Search/i);
  expect(navElement).toBeInTheDocument();
})

// test('Search Menu is rendered and Clickable', () => {
//   render(<App />)
//   const navElement = screen.getByText(/Search/i);
//   expect(navElement).toBeInTheDocument();
//   fireEvent.click(navElement)
//   const welcomeText = screen.getByText(/hello/i);
//   expect(welcomeText).toBeInTheDocument();
// })


test('History Menu is rendered', () => {
  render(<App />)
  const navElement = screen.getByText(/History/i);
  expect(navElement).toBeInTheDocument();
})

test('History Menu is rendered and Clickable', () => {
  render(<App />)
  const navElement = screen.getByText(/History/i);
  expect(navElement).toBeInTheDocument();
  fireEvent.click(navElement)
  const welcomeText = screen.getByText(/record/i);
  expect(welcomeText).toBeInTheDocument();
})