import { renderHook, act } from '@testing-library/react-hooks';
import { useBool } from '../src';

describe('useBool', () => {
  it('should initialize with TRUE', () => {
    const { result } = renderHook(() => useBool(true));
    const { bool } = result.current;

    expect(bool).toBe(true);
  });

  it('should initialize with FALSE', () => {
    const { result } = renderHook(() => useBool(false));
    const { bool } = result.current;

    expect(bool).toBe(false);
  });

  it('should update `bool` from TRUE to FALSE when `toFalse()` is called', () => {
    const { result } = renderHook(() => useBool(true));
    const { toFalse } = result.current;

    act(() => {
      toFalse();
    });

    const { bool } = result.current;

    expect(bool).toBe(false);
  });

  it('should update `bool` from FALSE to TRUE when `toTrue()` is called', () => {
    const { result } = renderHook(() => useBool(false));
    const { toTrue } = result.current;

    act(() => {
      toTrue();
    });

    const { bool } = result.current;

    expect(bool).toBe(true);
  });

  it('should update `bool` from TRUE to FALSE when `toggle()` is called', () => {
    const { result } = renderHook(() => useBool(true));
    const { toggle } = result.current;

    act(() => {
      toggle();
    });

    const { bool } = result.current;

    expect(bool).toBe(false);
  });

  it('should update `bool` from FALSE to TRUE when `toggle()` is called', () => {
    const { result } = renderHook(() => useBool(false));
    const { toggle } = result.current;

    act(() => {
      toggle();
    });

    const { bool } = result.current;

    expect(bool).toBe(true);
  });
});
