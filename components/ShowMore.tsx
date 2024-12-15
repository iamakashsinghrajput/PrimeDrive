"use client"
import { CustomButton } from "@/components";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utiles";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext, setLimit}: ShowMoreProps) =>
    {

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit);
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                    <CustomButton
                        btnType="button"
                        title="Show More"
                        containerStyles="bg-primary-blue rounded-full text-white"
                        handleClick={handleNavigation}
                    />
                )
            }
        </div>
    )
}


export default ShowMore;