// import React from "react";

// export default function ProductOptions({
//   name,
//   values,
//   selectedOptions,
//   setOptions,
//   product,
// }: any) {
//   console.log(name, "props1");
//   console.log(values, "props2");
//   console.log(selectedOptions, "props3");
//   console.log(product, "props4");
//   let unavailableSize: any = [];
//   product.map((item: any) => {
//     if (item.availibility == false) {
//       unavailableSize.push(item.options.Size);
//     }

//     // if(item.options.Size){}
//     // console.log(item.options.Size);
//   });

//   return (
//     <fieldset className="mt-3">
//       <div className="inline-flex items-center flex-wrap gap-3">
//         {values.map((value: any) => {
//           const id = `option-${name}-${value}`;
//           const checked = selectedOptions[name] === value;
//           // if (product.option == selectedOptions) {
//           // }

//           return (
//             <label key={id} htmlFor={id}>
//               <input
//                 className="sr-only"
//                 type="radio"
//                 id={id}
//                 name={`option-${name}`}
//                 value={value}
//                 checked={checked}
//                 onChange={() => {
//                   setOptions(name, value);
//                 }}
//               />
//               <div
//                 className={`px-4 py-2 border rounded-md text-sm cursor-pointer hover:bg-[#f8f5f0]
//  ${checked ? "bg-[#f2f6ef] border-gray-200 " : "border-gray-200 bg-white"}`}
//               >
//                 <span className="px-2">{value}</span>
//               </div>
//             </label>
//           );
//         })}
//       </div>
//     </fieldset>
//   );
// }

import React from "react";

export default function ProductOptions({
  name,
  values,
  selectedOptions,
  setOptions,
  product,
}: any) {
  // console.log(name, "props1");
  // console.log(values, "props2");
  // console.log(selectedOptions, "props3");
  // console.log(product, "props4");

  // collect unavailable sizes
  const unavailableSize: string[] = product
    .filter((item: any) => item.availibility === false)
    .map((item: any) => item.options.Size);

  // console.log(unavailableSize, "unavailableSize");

  return (
    <fieldset className="mt-3">
      <div className="inline-flex items-center flex-wrap gap-3">
        {values.map((value: any) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;
          const isUnavailable = unavailableSize.includes(value);

          return (
            <label key={id} htmlFor={id}>
              <input
                className="sr-only"
                type="radio"
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
                disabled={isUnavailable} // 👈 disable if unavailable
                onChange={() => {
                  if (!isUnavailable) setOptions(name, value);
                }}
              />
              <div
                className={`px-4 py-2 border rounded-md text-sm cursor-pointer hover:bg-[#f8f5f0]
                ${
                  checked
                    ? "bg-[#f2f6ef] border-gray-200 "
                    : "border-gray-200 bg-white"
                }
                ${isUnavailable ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span className="px-2">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
