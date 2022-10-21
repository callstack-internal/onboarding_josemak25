import { renderHook } from "@testing-library/react-hooks";

import { makeUseStyles } from "../../src/helpers/makeUseStyles";

describe("helper / makeUseStyles", () => {
  it("should return hook handler", () => {
    const useStyles = makeUseStyles(() => ({
      container: { flex: 1 },
    }));

    expect(useStyles).toBeInstanceOf(Function);
  });

  it("should return styles object", () => {
    const styles = { container: { flex: 1 } };
    const useStyles = makeUseStyles(() => styles);

    const { result } = renderHook(() => useStyles());

    expect(result.current).toHaveProperty("styles");
    expect(result.current).toHaveProperty("palette");
    expect(result.current.styles).toBe(styles);
  });
});
