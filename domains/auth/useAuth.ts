export function useAuth() {
  const loggedIn = ref(false)

  return {
    loggedIn,
  }
}
