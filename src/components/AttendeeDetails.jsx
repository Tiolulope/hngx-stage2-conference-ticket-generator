const AttendeeDetails = () => {
  return (
    <div
      id="Attende-Details"
      className="items-center mt-10 w-[100%] bg-[#08252B] ms:bg-[#041E23]
     p-[24px] border-[#197686] border-[1px] ms:w-[60%] md:w-[55%] md:p-[48px] rounded-2xl space-x-10 space-y-6"
    >
      <section className="flex-col justify-center items-center space-y-3">
        <div className="text-white md:flex md:justify-between md:items-center">
          <h1 className="text-[24px] md:text-[32px] sm:text-3xl  text-white font-mono">
            Attendee Details
          </h1>
          <span>
            <p className="text-gray-300 mt-2 flex-row ml-96">Step 2/3</p>
          </span>
        </div>
        <div className="bg-[#13bcd6] h-[4px] rounded-sm w-[100%]"></div>
      </section>
      <div
        className="banner min-h-[243px]  p-[10px] md:p-[24px] text-white text-center text-[14px] flex-col justify-center items-center space-y-4"
        style={{
          background:
            "linear-gradient(0deg, rgba(10, 12, 17, 0.1), rgba(10, 12, 17, 0.1)), radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
        }}
      ></div>
      <hr className="bg-[#07373F] h-[4px] rounded-sm" />

      {/* //Attendee Info //Name */}

      <div className="text-white font-roboto">
        <label htmlFor="">
          <p className="text-lg text-white mb-4">Enter your name</p>
        </label>
        <form>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border rounded-[15px] flex p-4 mb-20 justify-center text-[#ffffff] items-center space-x-96"
          />
        </form>
      </div>

      {/* Email */}
      <div className="text-white font-roboto">
        <label htmlFor="">
          <p className="text-lg text-white mb-4">Enter your Email</p>
        </label>
        <form>
          <input
            type="text"
            placeholder="hello@avioflagos.io"
            className="w-full border rounded-[15px] flex p-4 mb-20 justify-center text-[#ffffff] items-center space-x-96"
          />
        </form>
      </div>

      {/* message */}
      <div className="text-white font-roboto">
        <label htmlFor="">
          <p className="text-lg text-white mb-4">Send Request</p>
        </label>

        <textarea
          name="textarea"
          id="request"
          className="w-full border rounded-[15px] flex p-4 mb-20 justify-center text-[#ffffff]
           items-center space-x-96"
          placeholder="Textarea"
        ></textarea>

        {/* <form>
          <input
            type="text"
            placeholder="j"
            className="w-full border rounded-[15px] flex p-4 mb-20 justify-center text-[#ffffff] items-center space-x-96"
          />
        </form> */}
      </div>
      <div className="flex flex-row space-x-20 justify-center items-center">
        <button
          className="w-full sm:w-[266px] h-12 border rounded-lg pt-3 pr-4 pb-3 pl-4 flex items-center
        justify-center gap2 border-[#24A0B5] bg-transparent text-[#24a0b5] hover:bg-[#24A0B5]
        hover:text-white transiton-all cursor-pointer
        "
        >
          <span className="text-base font-medium font-mono">Back</span>
        </button>
        <button className="w-full sm:w-[266px] h-12 rounded-lg pt-3 pr-4 pb-3 pl-4 flex items-center justify-center gap-2 border border-[#07373F] bg-[#24A0B5] text-white hover:bg-[#0a4a54] hover:border-[#0a4a54] transition-all">
          <span className="text-base font-medium font-mono text-[#ffffff] cursor-pointer">
            Get My Free Ticket
          </span>
        </button>
      </div>
    </div>
  );
};

export default AttendeeDetails;
