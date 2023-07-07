export type FetchOptions = 'GET' | 'POST' | 'DELETE' | 'PUT';

const fetchWithAbort = (url: string, method: FetchOptions) => {
  const prefix = 'fetchWithAbort';
  // Create an instance.
  const controller = new AbortController()
  const signal = controller.signal

  /*
  // Register a listener.
  signal.addEventListener("abort", () => {
      console.log("aborted!")
  })
  */

  async function beginFetch() {
      console.log(prefix + ' - fetching - ' + url + ' - ' + method);

      const rawResponse = await fetch(url, {
        method, signal, mode: 'cors'
      });

      console.log(prefix + ' - done - ' + url + ' - ' + method);
      return rawResponse;
  }


  function abort() {
    console.log(prefix + ' - aborting - ' + url + ' - ' + method);
    controller.abort();
  }

  return {
    beginFetch,
    abort
  }
}

export default fetchWithAbort;