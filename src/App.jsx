/* eslint-disable react/prop-types */
import { personalFormLabels, educationFormLabels, workFormLabels } from './data/formLabels';
import EditingSelector from './components/EditingSelector';
import { NewForm, EditForm } from './components/Forms';
import Cv from './components/Cv';
import { useState } from 'react'
import './App.css'

function App() {
  const [cvData, setCvData] = useState([]);
  // personal, educational, work
  const [editing, setEditing] = useState('personal');

  const formLabels = { 'personal': personalFormLabels, 'education': educationFormLabels, 'work': workFormLabels }
  const labels = formLabels[editing]

  const editingSectionData = getSectionData(editing, cvData);

  return (
    <>
      <div className="forms-container">
        < EditingSelector editing={editing} setEditing={setEditing} />
        < NewForm labels={labels} editing={editing} cvData={cvData} setCvData={setCvData} />
        {editingSectionData.length > 0 &&
          <div className="section-edit-container">
            {editingSectionData.map((data, index) => (
              < EditForm key={index} formData={data} labels={labels} cvData={cvData} setCvData={setCvData} />
            ))}
          </div>
        }
      </div>
      < Cv personalInformation={getSectionData('personal', cvData)[0]} educationSection={getSectionData('education', cvData)} workSection={getSectionData('work', cvData)} />
    </>
  )
}

function getSectionData(sectionName, cvData) {
  return cvData.filter(data => data.section === sectionName);
}

export default App