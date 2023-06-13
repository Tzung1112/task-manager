import React from 'react';

export default function TaskBody(props) {
    const { dataList, handleDelete } = props; // Giải nén các props

    return (
        <div className='task-body' style={{

        }}>
            <table border={1} style={{
                width: '80%',
                textAlign: "center",
                margin: "auto"
            }}>
                <thead>
                    <tr>
                        <th># Content</th>
                        <th>Due date</th>
                        <th>Status</th>
                        <th>Assigned to</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.input}</td>
                            <td>{item.date}</td>
                            <td>{item.select}</td>
                            <td>{item.otherInput}</td>
                            <td>
                                {/* <button onChange={(e) => handleEdit(e.target.value,)}>Edit</button> */}
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
