import {FC, useEffect, useState} from 'react'

type Props = {}

const Roomstate:FC<Props> = (Props) => {
  const [state, setState] = useState({})
  useEffect(() => {
    fetch('https://api.nature.global/1/devices', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer wQPhjMPVlFwLaCzRdlVmmo0Z7Mjw-oJVM0hs_a0MpCU.mVB43m2sogf_T5w6kFEDgK5-Huo2NWxrCD70nKa2iDk'
      }
    }).then(r => r.json())
    .then(j => setState(j))
  },[])

  return (
    <div>{JSON.stringify(state)}</div>
  )
}

export default Roomstate;