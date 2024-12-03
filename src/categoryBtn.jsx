import { useState } from "react";

const CategoryBtn = ({ category, filterMenu }) => {

    const [mainCategory, setMainCategory] = useState('All')

    return (
        <div className="mainBtn">
            {
                category.map((item, i) => (
                    <button
                        key={i}
                        type='button'
                        className={item === mainCategory ? 'highLight' : ' btnCategory'}
                        onClick={() => {
                            setMainCategory(item)
                            filterMenu(item)
                        }}
                    >
                        {item}
                    </button>
                ))
            }
        </div>
    );
}

export default CategoryBtn;
