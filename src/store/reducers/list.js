import { Types } from '../actions/list'
import uuidv1 from 'uuid/v1'
import { createSelector } from 'reselect'

const initialState = {
    list: null,
    items: []
}

export default function list(state = initialState, action) {
    switch(action.type) {
        case Types.ADD_PRODUCT:
            return {
                list: action.list,
                items: [
                    ...state.items,
                    { ...action.product, total:getItemTotal(action.product), id: uuidv1(), checked: false } 
                ]
            };
        case Types.DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.productId)
            };
        case Types.TOGGLE_PRODUCT:
            return {
                ...state,
                items: toggleItem(state.items, action.productId)
            }
        default:
            return state;
    }
}

function getItemTotal(product) {
    return product.price * product.quantity
}

export const getListTotal = createSelector(
    state => state.list.items,
    items => {
        return items.reduce((total, item) => total + item.total, 0)
    }
)

export const getTotalOpened = createSelector(
    state => state.list.items,
    items =>  {
        return items.filter(item => !item.checked).length
    }
)

export const getTotalClosed = createSelector(
    state => state.list.items,
    items =>  {
        return items.filter(item => item.checked).length
    }
)

function toggleItem(items, productId) {
    const index = items.findIndex(item => item.id === productId)
    return [
        ...items.slice(0, index), // retorna todos os itens ANTES do que será atualizado
        { ...items[index], checked: !items[index].checked }, // retorna o item modificado na mesma posição
        ...items.slice(index+1) // retorna os itens DEPOIS do item modificado
    ]
}   