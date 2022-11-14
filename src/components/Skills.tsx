import csharp from '../../public/images/csharp.png';
import netCore from '../../public/images/aspnetcore.png';
import efCore from '../../public/images/ef_core.png';
import reactJs from '../../public/images/react.png';
import sql from '../../public/images/sql_server.png';
import git from '../../public/images/git.svg';
import ts from '../../public/images/ts.png';
import css from '../../public/images/css.png';
import html from '../../public/images/html.png';

export default function Skills() {
  return (
    <div id="skills" class="skills-section global-padding">
      <div class="container text-center">
        <div class="row">
          <h2>Skills</h2>
          <p class="b-underline"></p>
        </div>
        {/* First Skill Row */}
        <div class="global-margin">
          <div class="row">
            <div class="col-md-4">
              <img src={csharp} alt="CSharp Programming" height={185} width={185} />
              <h3>C#</h3>
            </div>
            <div class="col-md-4">
              <img src={reactJs} alt="React JS" height={185} width={185} />
              <h3>React</h3>
            </div>
            <div class="col-md-4">
              <img src={git} alt="Git Version Control" height={185} width={185} />
              <h3>Git VCS</h3>
            </div>
          </div>
          {/* Second Skill Row */}
          <div class="row" style={'margin-top: 100px;'}>
            <div class="col-md-4">
              <img src={netCore} alt="ASP.NET Core" height={175} width={275} />
              <h3>ASP.NET Core</h3>
            </div>
            <div class="col-md-4">
              <img src={sql} alt="MS SQL Server" height={175} width={250} />
              <h3>MSSQL</h3>
            </div>
            <div class="col-md-4">
              <img src={efCore} alt="Entity Framework Core" height={175} width={275} />
              <h3>EF Core</h3>
            </div>
          </div>
          {/* Third Skill Row */}
          <div class="row" style={'margin-top: 100px;'}>
            <div class="col-md-4">
              <img src={html} alt="HTML Five" height={175} width={175} />
              <h3>HTML5</h3>
            </div>
            <div class="col-md-4">
              <img src={ts} alt="TypeScript Programming" height={175} width={175} />
              <h3>TypeScript</h3>
            </div>
            <div class="col-md-4">
              <img src={css} alt="CSS Three" height={175} width={175} />
              <h3>CSS3</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
