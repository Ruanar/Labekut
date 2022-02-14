export const irParaLogin = (history) => {
    history.push('/login')
}

export const irParaCadastro = (history) => {
    history.push('/cadastro')
}

export const irParaFeed = (history) => {
    history.push('/')
}

export const irParaPost = (history, id) => {
    history.push(`/post/${id}`)
}

