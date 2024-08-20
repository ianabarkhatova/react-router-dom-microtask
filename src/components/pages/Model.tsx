import {adidasArr, ModelPropsType} from './Adidas'
import {pumaArr} from './Puma'
import {useParams} from "react-router-dom";

type ArraysType = {
    [key: string]: ModelPropsType[]
}

const arrays: ArraysType = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {

    const {id, model, lol} = useParams()

//The expression first checks if model is truthy (i.e., if model is not null, undefined, or any other falsy value).
    const item = model?
        arrays[model].find(el => el.id === Number(id))
        : null

    console.log(item)
    console.log(model)


    return (
        item
            ? <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                gap: '20px'
            }}>
                <div>{item?.model}</div>
                <div>{item?.collection}</div>
                <div>{item?.price}</div>
                <img
                    src={item?.picture}
                    alt={item?.model}
                    style={{width: '300px', height: '300px'}}
                />
            </div>
            : <div>Item not found</div>
    );
};