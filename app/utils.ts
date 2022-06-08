export const replaceUrl = (params: any) => {
  window.history.replaceState(
    {},
    '',
    `${window.location.origin}${window.location.pathname}?${Object.entries({
      ...params,
    })
      .flatMap(e => {
        if (e[1]) {
          return [`${e[0]}=${e[1]}`]
        } else {
          return []
        }
      })
      .join('&')}`,
  )
}
