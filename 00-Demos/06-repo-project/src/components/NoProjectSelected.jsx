import image from "../assets/no-projects.png";
export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={image} className="w-16 h-16 object-contain mx-auto" />
    </div>
  );
}
