import React from "react";
import { FiBox } from "react-icons/fi";

function AddProduct(){
    return(
        <div className="m-10 h-max flex flex-row">           
            <div class="h-full basis-1/4 px-8 py-4 text-left bg-[#F9F9F9]">
                <FiBox className="text-6xl opacity-20 my-2" />    
                <h3 className="font-bold text-xl capitalize my-2">General Info</h3>
                <p className="text-base my-2">Add here the product description with all details and necessary information.</p>
            </div>
            <div class="p-4 basis-3/4 bg-white h-full">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    
                </div>
            </div>
        </div>
    );
}

export default AddProduct;