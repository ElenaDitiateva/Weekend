const ChoiceCity = ({ setActive, setCity }) => {
  return (
    <div>
      <input
        className="p-2 mb-2.5 w-56 border border-Sea rounded-lg focus:outline-none"
        type="text"
        placeholder="Введите город"
      />
      <ul className="">
        <li
          className="mt-1.5 block list-none cursor-pointer hover:text-Sea"
          onClick={() => {
            setCity("Москва");
            setActive(false);
          }}
        >
          Москва
        </li>
        <li
          className="mt-1.5 block list-none cursor-pointer hover:text-Sea"
          onClick={() => {
            setCity("Екатеринбург");
            setActive(false);
          }}
        >
          Екатеринбург
        </li>
      </ul>
    </div>
  );
};

export default ChoiceCity;
