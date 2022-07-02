import { useState, useEffect, useRef } from 'react'

type useFetchProps = {
  initialValue: string
}

type fetchStatus = 'success' | 'failed' | 'loading'

type responseData = JSON | undefined

const useFetch = ({ initialValue }: useFetchProps) => {
  const [responseData, setResponseData] = useState<responseData>()
  const fetchStatus = useRef<fetchStatus>('loading')

  useEffect(() => {
    if (!initialValue) return

    const fetchData = async () => {
      if (initialValue) {
        try {
          const response = await fetch(initialValue)
          if (!response.ok) {
            throw new Error(response.statusText)
          }

          const data = await response.json()
          setResponseData(data)
        } catch (error) {
          fetchStatus.current = 'failed'
        }
      }
    }

    fetchData()

    return () => {
      fetchStatus.current = 'loading'
    }
  }, [initialValue])

  return [responseData, setResponseData]
}

export default useFetch
