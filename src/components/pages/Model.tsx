import React from 'react'
import {useParams} from 'react-router-dom'
import {S} from '../_styles'
import {SnikersItem} from '../../App'


export const Model = (props: { itemsArr: SnikersItem[] }) => {
    const params = useParams()
    const actualParams = Number(params.id) - 1

    return (
        <>
            {actualParams < props.itemsArr.length
                ? <S.ModelWrapper>
                    <S.ModelHeader>{props.itemsArr[actualParams].model}</S.ModelHeader>
                    <S.SpanText>{props.itemsArr[actualParams].collection}</S.SpanText>
                    <S.ModelImg src={props.itemsArr[actualParams].picture}/>
                    <S.SpanText>{props.itemsArr[actualParams].price}</S.SpanText>
                </S.ModelWrapper>
                : <S.ModelHeader>Wait a minute🤡</S.ModelHeader>
            }
        </>
    )
}



