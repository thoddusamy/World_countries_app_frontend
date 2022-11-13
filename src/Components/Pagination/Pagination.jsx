import React from 'react'
import './Pagination.css'

const Pagination = ({ totalCountryCount, cardPerPage, setCurrentPage, currentPage }) => {

    const pages = []
    const currentPageNo = localStorage.getItem("currentPageNo")

    for (let i = 1; i <= Math.ceil(totalCountryCount / cardPerPage); i++) {
        pages.push(i)
    }

    const prevPageHandler = () => {
        currentPage === 1 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1)
    }

    const nextPageHandler = () => {
        currentPage === pages.length ? setCurrentPage(pages.length) : setCurrentPage(currentPage + 1)
    }

    return (
        <div className='pagination_container'>
            <span onClick={prevPageHandler}>Prev</span>
            {
                pages.map((page, i) => {
                    return (
                        <span key={i}
                            className={page === +currentPageNo ? "active" : ''}
                            onClick={() => setCurrentPage(page)}
                        >{page}</span>
                    )
                })
            }
            <span onClick={nextPageHandler}>Next</span>
        </div>
    )
}

export default Pagination