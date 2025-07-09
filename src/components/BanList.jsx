import Attribute from "./Attribute";

function BanList({ attrList, removeBannedAttr }) {
  return (
    <div>
      {attrList.map((elem) => (
        <Attribute
          key={elem.id}
          id={elem.id}
          attr={elem.attr}
          type={elem.type}
          isBanned={true}
          removeBannedAttr={removeBannedAttr}
        />
      ))}
    </div>
  );
}

export default BanList;
