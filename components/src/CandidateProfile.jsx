export const CandidateProfile = () => {

    const name = "Peter Parker";
    const role = "Web Developer";
    const yearOfExperience = 5;
    
    return (
        <>
            <h2>{name}</h2>
            <p>{role} with {yearOfExperience} years of experience</p>
        </>
    );
};