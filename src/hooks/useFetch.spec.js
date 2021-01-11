import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

describe('useFetch hook', () => {
  it('should GET data', async () => {
    const expected = { salesTotal: 899, subscriptionsTotal: 344 };
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
      const response = {
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(response);
    });

    const { result, waitForNextUpdate } = renderHook(() => useFetch('api/totals'));

    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBeFalsy();

    await waitForNextUpdate();
    expect(result.current.data).toMatchObject(expected);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeFalsy();
  });

  it('shold handle errors', async () => {
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.reject(new Error('500 Server error')));

    const { result, waitForNextUpdate } = renderHook(() => useFetch('api/totals'));

    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBeFalsy();

    await waitForNextUpdate();
    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toEqual('500 Server error');
  });
});
