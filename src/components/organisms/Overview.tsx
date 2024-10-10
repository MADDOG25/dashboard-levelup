import DateView from "../atoms/Overview/DateView";
import MotivationalPhrases from "../atoms/Overview/MotivationalPhrases";
import TextOverview from "../atoms/Overview/TextOverview";

export default function Overview() {
  return (
    <div className="bg-[--colorBlue1] h-screen">
      <TextOverview />
      <div className="grid grid-cols-2 gap-x-10">
      <DateView/>
      <MotivationalPhrases/>
      </div>
    </div>
  );
}
