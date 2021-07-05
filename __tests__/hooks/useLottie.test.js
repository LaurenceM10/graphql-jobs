import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useLottie from '../../src/hooks/useLottie';

describe('useLottie', () => {
  test('should return a null ref when hook is call the first time', async () => {
    // assert
    const { result } = renderHook(() => useLottie());

    // expect
    expect(result.current.ref.current).toBeNull();
  });

  test('should execute [play] function when ref references to lottie', async () => {
    // assert
    const { result } = renderHook(() => useLottie());
    let { ref } = result.current;

    // TODO: read more about how to test this
  });
});
