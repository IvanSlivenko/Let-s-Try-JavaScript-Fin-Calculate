export function getTokenFromLocalStoradge(): string {
    const data = localStorage.getItem('token')
    const token: string = data ? JSON.parse(data) : ''

    return token
}

export function setTokenToLocalStoradge(key: string, token: string):void {
    localStorage.setItem(key, JSON.stringify(token))
    
}

export function removeTokenFromLocalStoradge(key: string): void{
    localStorage.removeItem(key)
}