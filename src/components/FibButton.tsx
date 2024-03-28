export function FibButton() {
  return (
    <>
      <button data-testid="fib-button">increment sequence</button>
      {"\tCurrent Value:\t"} <span data-testid="fib-current">1</span>
    </>
  );
}
