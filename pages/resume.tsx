import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* education & experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science and Engineering
            </h5>
            <p className="font-semibold">Academy of Technology (2017-2021)</p>
            <p className="my-3">
              I have completed my B.Tech Degree with 9.58 DGPA in Computer
              Science and Engineering.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
            <p className="font-semibold">Persistent Systems Ltd.</p>
            <p className="my-3">
              I work here as a software engineer and working in React UI domain.
            </p>
          </div>
        </div>
      </div>

      {/* language & tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">
            Languages {"&"} Frameworks
          </h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar key={language.name} data={language} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">
            Tools {"&"} Softwares
          </h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar key={tool.name} data={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
