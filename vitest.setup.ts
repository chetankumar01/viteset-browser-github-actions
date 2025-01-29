/// <reference types="@vitest/browser/matchers" />
import { vi } from "vitest";

vi.mock("dummy-module", () => ({
  dummyFunction: () => "dummy",
}));
