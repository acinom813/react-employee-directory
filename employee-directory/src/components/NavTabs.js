import React from "react";

function NavTabs({ onSearch, searchTerm, handleSortByName, handleSortByDept }) {
    return (
     <div className="md:flexjustify-between my-6">
       <div className="searchTabs">
            <button onClick={handleSortByName}>Search Names</button>
            <button onClick={handleSortByDept}>Search Departments</button>
        </div>
        <form>
            <input
                value={searchTerm}
                onChange={onSearch}
               type="text"
               placeholder="Search Employees" />
        </form>
    </div>  

    )
}

export default NavTabs;