import { useEffect, useState } from "react";

/**
 * Persist a piece of React state in `localStorage`.
 *
 * - **Initial value**: reads from `localStorage.getItem(key)` if present; otherwise uses `initValue`.
 * - **Persistence**: whenever `state` changes, writes `localStorage.setItem(key, state)`.
 *
 * Notes:
 * - This implementation stores values as strings (it does not `JSON.stringify` / `JSON.parse`).
 * - It assumes a browser environment where `localStorage` is available (not SSR-safe as-is).
 *
 * @param {string} key The `localStorage` key to read/write.
 * @param {string} initValue Value used when nothing is stored yet for `key`.
 * @param {boolean} dep has true as default value, checks if there is dep or not.
 * @returns {[string, import("react").Dispatch<import("react").SetStateAction<string>>]}
 * A tuple of `[state, setState]`, matching `useState`.
 */
export function useLocalStorage(key, initValue, dep = true) {
  const [state, setState] = useState(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initValue,
  );

  useEffect(
    () => {
      localStorage.setItem(key, JSON.stringify(state));
    },
    dep ? [state] : [],
  );

  return [state, setState];
}
