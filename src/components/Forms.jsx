import uuid from 'react-uuid';
import '../styles/Forms.css'

/* eslint-disable react/prop-types */
function NewForm({ labels, editing, cvData, setCvData }) {
    const createSectionData = (e) => {
        e.preventDefault();

        const sectionData = { 'section': editing, 'id': uuid() };
        [...e.target].forEach((input) => {
            if (input.id) {
                sectionData[input.id] = input.value;
                input.value = '';
            }
        })

        setCvData([...cvData, sectionData])
    }

    return (
        <form action="" onSubmit={createSectionData} className='new-form'>
            <div className="form-inputs">
                {labels.map((labelObj) =>
                    <div className="form-input" key={labelObj.id}>
                        <label htmlFor={labelObj.id}>{labelObj.label}</label>
                        {labelObj.type !== 'textarea' ?
                            <input type={labelObj.type} id={labelObj.id} required /> :
                            <textarea id={labelObj.id}></textarea>}
                    </div>
                )}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

function EditForm({ formData, labels, cvData, setCvData }) {
    const updateSectionData = (e, dataId) => {
        const dataIndex = cvData.findIndex((data) => data.id === dataId);

        const sectionData = { ...cvData[dataIndex] };
        sectionData[e.target.id] = e.target.value;

        const updatedCvData = [...cvData];
        updatedCvData[dataIndex] = sectionData;
        setCvData(updatedCvData);
    }

    return (
        <form action="" onChange={(e) => updateSectionData(e, formData.id)} className='editing-form'>
            <div className="form-inputs">
                {labels.map((labelObj) =>
                    <div className="form-input" key={labelObj.id}>
                        <label htmlFor={labelObj.id}>{labelObj.label}</label>
                        {labelObj.type !== 'textarea' ?
                            <input onChange={(e) => updateSectionData(e, formData.id)} value={formData[labelObj.id]} type={labelObj.type} id={labelObj.id} required /> :
                            <textarea onChange={(e) => updateSectionData(e, formData.id)} value={formData[labelObj.id]} id={labelObj.id} required></textarea>}
                    </div>
                )}
            </div>
        </form>
    )
}

export { NewForm, EditForm }

// <input onChange={(e) => updateSectionData(e, formData.id)} value={formData[labelObj.id]} type={labelObj.type} id={labelObj.id} name={labelObj.id} required />
