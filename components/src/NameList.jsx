export const NameList = () => {
    const names = ['Bruce', 'Diana', 'Clark']

    const nameList = names.map((name) => <h2 key={`${name}`}>{name}</h2>)

    return <div>{nameList}</div>
};