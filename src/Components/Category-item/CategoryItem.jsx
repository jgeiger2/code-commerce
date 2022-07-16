import '../Category-item/CategoryItem.scss'

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category
    return (
        <div className='item-container'>
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='item-body-container'>
                <h2>{title}</h2>
                <p>Buy Now</p>
            </div>
        </div>
    )
}

export default CategoryItem