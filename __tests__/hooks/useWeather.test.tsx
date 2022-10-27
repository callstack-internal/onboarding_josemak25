import { renderHook } from "@testing-library/react-hooks";

import { useWeather } from "../../src/hooks/useWeather";
import { QueryClientProvider as wrapper } from "../../src/providers/QueryClientProvider";

describe("hooks / useWeather", () => {
  it("should return hook handler result", async () => {
    const { result, waitFor } = renderHook(() => useWeather(), { wrapper });

    await waitFor(() => result.current.isSuccess);
  });
});
