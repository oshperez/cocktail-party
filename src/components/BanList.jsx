import Attribute from "./Attribute";

function BanList({ attrList }) {
  return (
    <div>
      {attrList.map((elem) => (
        <Attribute
          key={elem.id}
          attr={elem.attr}
          type={elem.type}
          isBanned={true}
        />
      ))}
    </div>
  );
}

export default BanList;
