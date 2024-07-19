/* eslint-disable react/prop-types */
export default function Cv({ personalInformation, educationSection, workSection }) {
    return (
        <div className="cv-container">
            <div className="personal-information">
                {personalInformation ?
                    <>
                        <h1>{personalInformation.name}</h1>
                        <p>{personalInformation.email}</p>
                        <p>{personalInformation.phone}</p>
                    </>
                    :
                    <>
                        <h1>Name</h1>
                        <p>Email</p>
                        <p>Phone Number</p>
                    </>
                }
            </div>
            <div className="cv-body">
                <h2>Education</h2>
                {educationSection.length > 0 &&
                    <div className="education-section">
                        {educationSection.map((education, index) =>
                            <div key={index} className="section">
                                <h3>{education.school}</h3>
                                <p>{education.study}</p>
                                <p>{education.studyDate}</p>
                            </div>
                        )}
                    </div>
                }
                <div className="work-section">
                    <h2>Work</h2>
                    {workSection.length > 0 &&
                        <div className="work-section">
                            {workSection.map((work, index) =>
                                <div key={index} className="section">
                                    <h3>{work.company}</h3>
                                    <p>{work.position}</p>
                                    <p>{work.responsibilities}</p>
                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}