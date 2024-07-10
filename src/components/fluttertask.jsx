import PageSwitchAni from "./transitionAnimation/pageAni";
import video from "../assets/fluttertaskapp.webm";
function FlutterTask() {
  return (
    <div>
      <PageSwitchAni />
      <div className="mt-20 ">
        <div className="w-3/4 h-96 bg-green-500">some</div>
        <div className="fixed top-28 right-20">
          <video width="180" height="100" controls>
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default FlutterTask;
