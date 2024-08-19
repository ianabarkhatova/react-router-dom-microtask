import {adidasArr} from './Adidas'
import {useParams} from "react-router-dom";



export const Model = () => {
    const params = useParams()

    console.log(adidasArr)
    console.log(params)

    const {id} = useParams()
    const adidasItem = adidasArr.find(el => el.id === Number(id))

    console.log(adidasItem)
    if (!adidasItem) {
        return <div>Item not found</div>
    }
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            gap: '20px'
        }}>
            <div>{adidasItem.model}</div>
            <div>{adidasItem.collection}</div>
            <div>{adidasItem.price}</div>
            <img
                src={adidasItem.picture}
                alt={adidasItem.model}
                style={{width: '300px', height: '300px'}}
            />
        </div>
    );
};