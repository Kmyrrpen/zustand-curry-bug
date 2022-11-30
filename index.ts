import createStore from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface State {
  foo: boolean;
}

createStore<State>()(
  immer((set, get) => ({
    foo: true,
  }))
);

createStore<State>()(
  persist(
    (set) => ({
      foo: true,
    }),
    { name: "foo" }
  )
);
