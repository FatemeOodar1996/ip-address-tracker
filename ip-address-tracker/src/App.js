import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiChevronRight } from "react-icons/bi";

export default function App() {
    let schema = yup.object().shape({
        searchData: yup.number().required("search must be a number type."),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className="flex flex-col justify-center align-center ">
                <div className="bg-pattern bg-cover bg-no-repeat p-10 md:pb-[6rem] pb-[10rem] flex flex-col items-center">
                    <h1 className="text-2xl text-center text-white font-semibold tracking-wide font-rubik pb-3">
                        IP Adress Tracker
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col items-center">
                            <div className="flex ">
                                <input
                                    className="text-sm pl-5 md:w-96 w-72 h-[43px]  text-white rounded-l-xl"
                                    type="text"
                                    placeholder="search..."
                                    {...register("searchData")}
                                />
                                <button type="submit" className=" bg-veryDarkGray p-2.5 rounded-r-xl">
                                    <BiChevronRight className="text-2xl text-white" />
                                </button>
                            </div>

                            <p>{errors.searchData?.message}</p>
                        </div>
                    </form>
                </div>
                <div className="bg-orange-500">map</div>
            </div>

            <div class="grid grid-cols-6 p-5 relative">
                <div class="shadow-lg absolute top-[-150px] md:top-[-83px] w-full bg-white flex flex-col md:flex-row align-center justify-between text-center md:text-left md:col-start-2 md:col-end-6 col-start-1 col-end-7 col-span-4 lg:gap-4 gap-2 p-5 rounded-xl">
                    <div className="md:w-21">
                        <h5 className="mb-1 text-darkGray font-normal font-rubik tracking-wide text-xs uppercase">
                            IP Address
                        </h5>
                        <p className=" text-veryDarkGray font-bold font-rubik text-xl">192.212.174.101</p>
                    </div>
                    <span className="w-px h-100 bg-darkGray"></span>
                    <div className="md:w-21">
                        <h5 className="mb-1 text-darkGray font-normal  font-rubik tracking-wide text-xs uppercase">
                            Location
                        </h5>
                        <p className=" text-veryDarkGray font-bold font-rubik text-xl">Broklyn.NY 10001</p>
                    </div>
                    <span className="w-px h-100 bg-darkGray"></span>
                    <div className="md:w-21">
                        <h5 className="mb-1 text-darkGray font-normal  font-rubik tracking-wide text-xs uppercase">
                            Timezone
                        </h5>
                        <p className=" text-veryDarkGray font-bold font-rubik text-xl">UTC - 05:00</p>
                    </div>
                    <span className="w-px h-100 bg-darkGray"></span>
                    <div className="md:w-21">
                        <h5 className=" text-darkGray font-normal  font-rubik tracking-wide text-xs uppercase">ISP</h5>
                        <p className=" text-veryDarkGray font-bold font-rubik text-xl">
                            SpaceX <br /> Starlink
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
