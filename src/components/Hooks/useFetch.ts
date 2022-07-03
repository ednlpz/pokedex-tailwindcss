import { useState, useEffect, useRef } from 'react'

type fetchStatus = 'success' | 'failed' | 'loading'

type responseData = { [key: string]: any }

type cache = { [key: string]: responseData }

const useFetch = (link?: string) => {
  const [responseData, setResponseData] = useState<responseData>()
  const fetchStatus = useRef<fetchStatus>('loading')
  const cache = useRef<cache>({})
  useEffect(() => {
    if (!link) return

    const fetchData = async () => {
      if (link) {
        try {
          if (link in cache.current) {
            setResponseData(cache.current[link])
            fetchStatus.current = 'success'
            return
          }

          const response = await fetch(link)
          if (!response.ok) {
            throw new Error(response.statusText)
          }

          const data = await response.json()
          setResponseData(data)

          fetchStatus.current = 'success'
        } catch (error) {
          fetchStatus.current = 'failed'
        }
      }
    }

    fetchData()

    return () => {
      fetchStatus.current = 'loading'
    }
  }, [link])

  return [responseData, fetchStatus] as const
}

export default useFetch
