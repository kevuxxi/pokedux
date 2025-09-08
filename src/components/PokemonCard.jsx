
import { Alert, Card, Tag } from "antd"
import Meta from "antd/es/card/Meta"
import StarButtom from "./StarButtom"
import { useDispatch } from "react-redux"
import { setFavorite } from "../actions"

const PokemonCard = ({ name, image, abilities, id,favorite }) => {
    const dispatch = useDispatch();

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonid: id }))

    }

    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StarButtom isFavorite={favorite} onclick={handleOnFavorite} />}
            actions={[


                <Tag color="red">{abilities[0]?.ability?.name}</Tag>,
                <Tag color="blue">{abilities[1]?.ability?.name}</Tag>,
            ]}

        /*  actions={abilities.map((a, index) => (
             <Tag key={index} color={index % 2 === 0 ? "red" : "blue"}>
                 {a.ability.name}
             </Tag>
         ))}
*/
        >


        </Card>
    )
}

export default PokemonCard