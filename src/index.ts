import { ResponseActivity } from "./models/ResponseActivity";
import { GithubService } from "./services/GithubService";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = () => {
  return new Promise((resolve) => {
    rl.question("Ingrese el usuario de GitHub: ", resolve);
  });
};

const main = async () => {
  const user_name = await answer();

  let str: string;

  if (typeof user_name === "string") {
    str = user_name;
  } else {
    str = "";
    console.error("Value is not a string");
  }
  const githubService: GithubService = new GithubService();
  const response: ResponseActivity[] = await githubService.getUserActivity(str);

  console.clear();
  console.info(`Detalle de actividad del usuario ${str}`);

  response.forEach((item: ResponseActivity) => {
    console.info("- - - - - - - - - - - - - - - - - - - -");
    console.info(`Repositorio: ${item.repo_name}`);

    console.info(`Este repositorio es ${item.public ? "publico" : "privado"}`);

    const commitQuantity: number = item.commits?.length;
    console.info(`Se han realizado ${commitQuantity || 0} commits`);
    if (item.commits) console.table(item.commits);

    console.info(`Cuenta con ${item.issue ? "1 issue" : "0 issues"}`);
    if (item.issue) {
      console.info(`Nombre del issue ${item.issue.title}`);
      if (item.issue.labels)
        console.info(`Labels asociados ${item.issue.labels.join(", ")}`);

      console.info(
        `Actualmente tiene el estado ${item.issue.state} y se encuentra ${
          item.issue.locked ? "bloqueado" : "activo"
        }`
      );

      // console.info("Detalle del issue");
      // console.info(item.issue.body);
    }

    console.info(
      `Cuenta con ${item.comment ? "1 comentario" : "0 comentarios"}`
    );
    if (item.comment) {
      console.info(`Agregado por ${item.comment.user}`);
      console.info("Detalle del comentario");
      console.info(item.comment.body);
    }
    console.info("- - - - - - - - - - - - - - - - - - - -");
  });
};

main();
