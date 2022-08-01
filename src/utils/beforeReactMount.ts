export function beforeReactMount() {
  const baseUrl = 'http://84.201.138.211:8080'
  const query = new URLSearchParams(window.location.search)
  const discordCode = query.get('code')
  let fetchRequest: Window['userFetch'] | null = null
  if (discordCode) {
    fetchRequest = fetch(`${baseUrl}/authUser?discordCode=${discordCode}`, {
      method: 'GET',
      credentials: 'include',
    }).then((usernameRes) => {
      window.history.replaceState({}, '', 'http://localhost:3000')
      return usernameRes.json()
    })
  } else {
    fetchRequest = window.userFetch = fetch(`${baseUrl}/tryAuth`, {
      method: 'GET',
      credentials: 'include',
    }).then((res) => res.json())
  }
  window.userFetch = fetchRequest
}
