import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

const Table = ({books,deleteBook}) => {
    
    return books.map((book,index)=>(
        
        <tr key={book.bookNumber}>
            <td>{book.bookName}</td>
            <td>{book.booktitle}</td>
            <td>{book.authorName}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.bookNumber)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}

export default Table
