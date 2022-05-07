import { act, renderHook } from '@testing-library/react-hooks';
import useUser from './useUser';

const myInitialUser: User = { firstName: 'John John', lastName: 'Florence' };
const myNewUser: User = { firstName: 'Nathan', lastName: 'Florence' };

jest.mock('../services/user', () => ({
  getUser: jest.fn(() => Promise.resolve(myNewUser)),
}));

describe('useUser', () => {
  it('should return correct user on initialization', () => {
    const { result } = renderHook(() => useUser(myInitialUser));
    expect(result.current.user).toBe(myInitialUser);
  });
  it('should update user after a call to refetchUser', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useUser(myInitialUser),
    );
    expect(result.current.user).toBe(myInitialUser);
    act(() => {
      result.current.refetchUser();
    });
    await waitForNextUpdate();
    expect(result.current.user).toBe(myNewUser);
  });
});
