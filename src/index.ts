import { useState, useMemo } from 'react';

/**
 * A hook that encapsulates all the logic associated with a `boolean` value.
 */
export const useBool: UseBoolHook = (initialValue) => {
  const [bool, setBool] = useState<boolean>(initialValue);

  return useMemo<UseBool>(
    () => ({
      bool,
      toFalse: () => setBool(false),
      toTrue: () => setBool(true),
      toggle: () => setBool((v) => !v),
    }),
    [bool],
  );
};

export type UseBool = {
  /**
   * `bool` - The `boolean` variable.
   */
  bool: boolean;
  /**
   * `toFalse` - Function that updates the `bool` to `false`.
   */
  toFalse: () => void;
  /**
   * `toTrue` - Function that updates the `bool` to `true`.
   */
  toTrue: () => void;
  /**
   * `toggle` - Function that updates the `bool` between `true` and `false`.
   */
  toggle: () => void;
};

type UseBoolHook = (initialValue: boolean) => UseBool;
