import forwardarrow from "/forwardarrow.svg";

const ProfileDetailsItem = ({ name, details, icon }) => {
  return (
    <div className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between p-4">
      <div className="flex items-center gap-4">
        <img src={icon} alt="" className="rounded-md" />
        <div>
          <p className="text-black font-semibold text-sm">{name}</p>
          <p className="text-black mt-2 text-xs">{details}</p>
        </div>
      </div>
      <img src={forwardarrow} alt="" />
    </div>
  );
};

export default ProfileDetailsItem;
