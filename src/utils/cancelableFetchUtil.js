// @flow

export const cancelableFetch = (url: string, data: Object) => {
  let canceled = false
  // $FlowFixMe
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (canceled) {
        reject(new Error({ isCanceled: true }))
      } else {
        window
          .fetch(url, data)
          .then(val =>
            canceled ? reject(new Error({ isCanceled: true })) : resolve(val)
          )
          .catch(error =>
            canceled ? reject(new Error({ isCanceled: true })) : reject(error)
          )
      }
    }, 250)
  })

  return {
    promise,
    cancel () {
      canceled = true
    }
  }
}
