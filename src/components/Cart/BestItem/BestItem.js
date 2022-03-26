const BestItem = ({ item }) => {
  return (
    <div className="flex justify-center items-center px-5 py-2 my-5 mx-4 rounded-full bg-[#f5767669]">
      <p className="font-bold">{item.name}</p>
    </div>
  );
};
export default BestItem;
