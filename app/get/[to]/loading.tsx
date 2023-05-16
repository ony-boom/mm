export default function Loading({length = 1}: {length: number}) {
  const loadingArr = Array(length)
    .fill("")
    .map((_, idx) => {
      return (
        <div
          className="message rounded-md p-8 flex flex-col gap-8 animate-pulse opacity-10 bg-gray-500"
          key={idx}
        >
          <div className="flex justify-between items-center">
            <p className="flex items-center font-semibold gap-2 text-lg">
              <span className="rounded-md bg-gray-200"></span>
              <span>{"->"}</span>
              <span className="rounded-md bg-gray-200"></span>
            </p>

            <p className="text-neutral-400 text-sm rounded-md bg-gray-200"></p>
          </div>

          <p className="rounded-md bg-gray-200">{}</p>
        </div>
      );
    });

  return <>{loadingArr}</>;
}
