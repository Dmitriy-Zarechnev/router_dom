import React from 'react'
import {useParams} from 'react-router-dom'
import {S} from '../_styles'
import {SnikersItem} from '../../App'


export const Model = (props: { itemsArr: SnikersItem[] }) => {
    const params = useParams()

    return (
        <S.ModelWrapper>
            <S.ModelHeader>{props.itemsArr[Number(params.id) - 1].model}</S.ModelHeader>
            <S.SpanText>{props.itemsArr[Number(params.id) - 1].collection}</S.SpanText>
            <S.ModelImg src={props.itemsArr[Number(params.id) - 1].picture}/>
            <S.SpanText>{props.itemsArr[Number(params.id) - 1].price}</S.SpanText>
        </S.ModelWrapper>
    )
}



