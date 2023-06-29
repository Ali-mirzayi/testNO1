import Image from "next/image";
import Designer from "./components/designer";
import Json from "./components/json";
import Property from "./components/property";
import Toolbar from "./components/toolbar";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <div
          style={{ border: "1px solid #606461", width: "10%", height: "130vh" }}
        >
          <Toolbar />
        </div>
        <div
          style={{ border: "1px solid #606461", width: "68%", height: "130vh" }}
        >
          <Designer />
          <Json />
        </div>
        <div
          style={{ border: "1px solid #606461", width: "22%", height: "130vh" }}
        >
          <Property />
        </div>
      </div>
    </main>
  );
}
