import { StarOutlined } from "@ant-design/icons"
import { Card, Tag } from "antd"
import Meta from "antd/es/card/Meta"

const PokemonCard = ({ name, image, abilities }) => {
    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StarOutlined />}
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