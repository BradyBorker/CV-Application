/* eslint-disable react/prop-types */
export default function EditingSelector({ editing, setEditing }) {
    return (
        <div className="editing-selector-container">
            <label htmlFor="editing-selector"></label>
            <select name='editing' id='editing-selector' value={editing} onChange={(e) => setEditing(e.target.value)}>
                <option value="personal">Personal Information</option>
                <option value="education">Educational Experiences</option>
                <option value="work">Work Experiences</option>
            </select>
        </div>
    )
}