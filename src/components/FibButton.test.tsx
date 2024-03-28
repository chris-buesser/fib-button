/**
 * @vitest-environment jsdom
 */
import { test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FibButton } from "./FibButton";

afterEach(() => cleanup());

test("it should start at 1", async () => {
  render(<FibButton />);

  await screen.findByTestId("fib-current");

  expect(screen.getByTestId("fib-current").textContent).toBe("1");
});

test("when you click the button 4 times you should end up on the 4th fib number", async () => {
  const user = userEvent.setup();

  render(<FibButton />);

  const button = screen.getByRole("button");

  await user.click(button);
  await user.click(button);
  await user.click(button);
  await user.click(button);

  await screen.findByTestId("fib-current");

  expect(screen.getByTestId("fib-current").textContent).toBe("5");
});

test("It should be correct for every fib number through fib 20", async () => {
  render(<FibButton />);

  expect(true).toBe(false);
});
