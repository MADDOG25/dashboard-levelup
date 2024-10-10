export default function DateView() {
  return (
    <div className="bg-[--colorBlue2] m-6 p-4 rounded-2xl">
      <div className="text-[--colorWhite] text-center p-6 font-bold grid gap-y-4">
        <p className="text-6xl">
          {new Date().toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="text-4xl">
          {new Date().toLocaleDateString("es", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
