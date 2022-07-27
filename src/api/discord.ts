import { BaseApi, HttpMethod } from './BaseApi'

class DiscordApi extends BaseApi {
  protected clientId: string
  protected clientSecret: string

  constructor(cliendId: string, clientSecret: string) {
    super('https://discord.com/api/v10/')

    this.clientId = cliendId
    this.clientSecret = clientSecret
  }

  getToken(code: string) {
    const params = new URLSearchParams({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: `http://localhost:3000`,
      scope: 'identify',
    })

    return this.request(HttpMethod.POST, `oauth2/token`, {
      body: params.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  }

  getUserByToken({
    tokenType,
    accessToken,
  }: {
    tokenType: string
    accessToken: string
  }) {
    return this.request(HttpMethod.GET, 'users/@me', {
      headers: {
        authorization: `${tokenType} ${accessToken}`,
      },
    })
  }
}

export const discordApi = new DiscordApi(
  process.env.REACT_APP_CLIENT_ID as string,
  process.env.REACT_APP_CLIENT_SECRET as string
)
