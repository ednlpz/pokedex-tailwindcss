import { useState, useEffect, useRef, useCallback } from 'react'

type fetchStatus = 'success' | 'failed' | 'loading'

type responseData = { [key: string]: any }

type cache<T> = { [key: string]: T }

const useFetch = (link?: string) => {
  const [responseData, setResponseData] = useState<responseData>()
  const fetchStatus = useRef<fetchStatus>('loading')
  const cache = useRef<cache<responseData>>({})

  const fetchData = useCallback(async () => {
    if (link) {
      try {
        if (link in cache.current) {
          fetchStatus.current = 'success'
          setResponseData(cache.current[link])
          return
        }

        const response = await fetch(link)
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = await response.json()
        cache.current[link] = data
        setResponseData(data)

        fetchStatus.current = 'success'
      } catch (error) {
        fetchStatus.current = 'failed'
      }
    }
  }, [link])

  useEffect(() => {
    if (!link) return
    fetchData()

    return () => {
      fetchStatus.current = 'loading'
    }
  }, [link, fetchData])

  return [responseData, fetchStatus] as const
}

export default useFetch
