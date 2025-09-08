import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Button } from 'antd'


const StarButtom = ({ isFavorite, onclick }) => {

    const Icon = isFavorite ? StarFilled  :  StarOutlined ;
    return (
        <Button icon={<Icon/>} onClick={onclick} ></Button>
    )
}

export default StarButtom