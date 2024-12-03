import data from './datas';
import './App.css';
import Menu from './Menu';
import CategoryBtn from './categoryBtn';
import { useState } from 'react';


function App() {

    const allCategory = ['All', ...new Set(data.map(item => item.category))]
    const [allMenu, setAllMenu] = useState([...data])
    const [categories, setCategories] = useState(allCategory)

    const filterMenu = (category) => {

        if (category === 'All') {
            setAllMenu(data)
            return
        }

        let filteredMenu = data.filter(item => item.category === category)
        setAllMenu(filteredMenu)
    }

    return (
        <main >
            <section className="menuSection">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underLine"></div>
                </div>

                <CategoryBtn category={categories} filterMenu={filterMenu} />
                <Menu menu={allMenu} />
            </section>

        </main>
    );
}

export default App;
