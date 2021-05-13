import { FC } from 'react';
import DefaultLayout from '../components/template/Default'

type MainProps = {}

const Main:FC<MainProps> = (MainProps) => {
  return (
    <DefaultLayout
      LeftContent={<div></div>}
      RightContent={<div></div>}
    />
  )
}

export default Main