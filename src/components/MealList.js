import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
 
const MealList = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => { 
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setMeals(data.categories))
    }, [])
    const footer = `In total there are ${meals ? meals.length : 0} meals.`;
    return (
        <>
            <DataTable value={meals} paginator rows={5} footer={footer}>
            <Column field="idCategory" header="Sl No."></Column>
            <Column field="strCategory" header="Category"></Column>
            <Column field="strCategoryDescription" header="Description"></Column>
        </DataTable>
        </>
    );
};

export default MealList;