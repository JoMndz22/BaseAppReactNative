import { ReactElement } from 'react'

export interface BtnProps{
    title?:string,
    children?: ReactElement | ReactElement[],
    background?: string,
    color?: string,
    onPress: ()=> void
}