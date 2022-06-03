import React from "react";
import { useStateContext } from "./context/StateContext";
import { Navbar } from "./components";

const App = () => {
  const { mode } = useStateContext();
  return (
    <div
      className={`min-h-screen max-w-7xl mx-auto w-full border border-black ${
        mode === "Dark" ? "dark" : ""
      }`}
    >
      <Navbar />
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        repellendus sint expedita aut incidunt non, iure illo numquam
        praesentium. Quisquam ratione odit assumenda distinctio ab? Ipsum illo
        exercitationem at deleniti. Molestiae eum at sapiente ipsum repellat
        provident, consequuntur facere tempora corporis incidunt. Ipsam deserunt
        rem ab et expedita, veritatis minus a molestiae culpa, harum eius
        ducimus mollitia quam? Impedit, error. Dicta, ex ratione. Vero
        voluptatem cupiditate, maiores est sunt corporis accusantium quae nam
        facere culpa iste beatae quod ipsum reprehenderit ea laudantium totam
        in! Dolorem architecto molestiae neque quis consequatur. Consequatur,
        facilis nesciunt perspiciatis, dolor modi eos esse perferendis deleniti
        aspernatur quod sint saepe. Doloribus voluptate voluptates non
        consequatur? Ullam culpa, reprehenderit exercitationem accusamus quae
        delectus voluptas commodi nesciunt cumque? Nesciunt optio quam, odit vel
        natus inventore, nisi fugiat, amet consequuntur aliquam obcaecati in.
        Cupiditate fugiat rerum voluptatem ad at dolorem minus maiores iste
        corrupti qui. Error deserunt amet quos? Quo nobis, dolorum impedit
        explicabo ad dicta qui laboriosam? Beatae, quo! Maxime, praesentium.
        Incidunt recusandae cumque dignissimos amet doloribus non. Dolorem illo
        sapiente odit accusantium? Cum saepe labore voluptate impedit? Eius
        tempore debitis sunt fugit laboriosam dignissimos distinctio enim natus
        ab officia quasi, architecto accusamus nam minus eum harum animi ad
        blanditiis corrupti magni fuga consectetur repellat! Atque, voluptatem
        eos. Ducimus suscipit aliquid, quas nemo minima laudantium
        necessitatibus corrupti esse praesentium perferendis! Expedita,
        laboriosam, magnam optio assumenda ratione atque laudantium facere cum
        repellendus debitis ipsam et consectetur in quo dolorem. Id, commodi
        omnis ratione iure maiores molestias tenetur neque illum odio
        reprehenderit? Unde aut doloremque dignissimos quo necessitatibus modi
        rem sit, asperiores blanditiis libero quisquam architecto voluptates
        enim magnam voluptatibus. Suscipit molestias beatae cum, totam iste eum
        repellendus commodi? Illo aperiam ullam quis. Recusandae earum eaque ex,
        vitae similique unde! Totam ratione inventore quo eum tempora,
        reiciendis adipisci dolore commodi.
      </div>
      <div className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        repellendus sint expedita aut incidunt non, iure illo numquam
        praesentium. Quisquam ratione odit assumenda distinctio ab? Ipsum illo
        exercitationem at deleniti. Molestiae eum at sapiente ipsum repellat
        provident, consequuntur facere tempora corporis incidunt. Ipsam deserunt
        rem ab et expedita, veritatis minus a molestiae culpa, harum eius
        ducimus mollitia quam? Impedit, error. Dicta, ex ratione. Vero
        voluptatem cupiditate, maiores est sunt corporis accusantium quae nam
        facere culpa iste beatae quod ipsum reprehenderit ea laudantium totam
        in! Dolorem architecto molestiae neque quis consequatur. Consequatur,
        facilis nesciunt perspiciatis, dolor modi eos esse perferendis deleniti
        aspernatur quod sint saepe. Doloribus voluptate voluptates non
        consequatur? Ullam culpa, reprehenderit exercitationem accusamus quae
        delectus voluptas commodi nesciunt cumque? Nesciunt optio quam, odit vel
        natus inventore, nisi fugiat, amet consequuntur aliquam obcaecati in.
        Cupiditate fugiat rerum voluptatem ad at dolorem minus maiores iste
        corrupti qui. Error deserunt amet quos? Quo nobis, dolorum impedit
        explicabo ad dicta qui laboriosam? Beatae, quo! Maxime, praesentium.
        Incidunt recusandae cumque dignissimos amet doloribus non. Dolorem illo
        sapiente odit accusantium? Cum saepe labore voluptate impedit? Eius
        tempore debitis sunt fugit laboriosam dignissimos distinctio enim natus
        ab officia quasi, architecto accusamus nam minus eum harum animi ad
        blanditiis corrupti magni fuga consectetur repellat! Atque, voluptatem
        eos. Ducimus suscipit aliquid, quas nemo minima laudantium
        necessitatibus corrupti esse praesentium perferendis! Expedita,
        laboriosam, magnam optio assumenda ratione atque laudantium facere cum
        repellendus debitis ipsam et consectetur in quo dolorem. Id, commodi
        omnis ratione iure maiores molestias tenetur neque illum odio
        reprehenderit? Unde aut doloremque dignissimos quo necessitatibus modi
        rem sit, asperiores blanditiis libero quisquam architecto voluptates
        enim magnam voluptatibus. Suscipit molestias beatae cum, totam iste eum
        repellendus commodi? Illo aperiam ullam quis. Recusandae earum eaque ex,
        vitae similique unde! Totam ratione inventore quo eum tempora,
        reiciendis adipisci dolore commodi.
      </div>
      <div className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        repellendus sint expedita aut incidunt non, iure illo numquam
        praesentium. Quisquam ratione odit assumenda distinctio ab? Ipsum illo
        exercitationem at deleniti. Molestiae eum at sapiente ipsum repellat
        provident, consequuntur facere tempora corporis incidunt. Ipsam deserunt
        rem ab et expedita, veritatis minus a molestiae culpa, harum eius
        ducimus mollitia quam? Impedit, error. Dicta, ex ratione. Vero
        voluptatem cupiditate, maiores est sunt corporis accusantium quae nam
        facere culpa iste beatae quod ipsum reprehenderit ea laudantium totam
        in! Dolorem architecto molestiae neque quis consequatur. Consequatur,
        facilis nesciunt perspiciatis, dolor modi eos esse perferendis deleniti
        aspernatur quod sint saepe. Doloribus voluptate voluptates non
        consequatur? Ullam culpa, reprehenderit exercitationem accusamus quae
        delectus voluptas commodi nesciunt cumque? Nesciunt optio quam, odit vel
        natus inventore, nisi fugiat, amet consequuntur aliquam obcaecati in.
        Cupiditate fugiat rerum voluptatem ad at dolorem minus maiores iste
        corrupti qui. Error deserunt amet quos? Quo nobis, dolorum impedit
        explicabo ad dicta qui laboriosam? Beatae, quo! Maxime, praesentium.
        Incidunt recusandae cumque dignissimos amet doloribus non. Dolorem illo
        sapiente odit accusantium? Cum saepe labore voluptate impedit? Eius
        tempore debitis sunt fugit laboriosam dignissimos distinctio enim natus
        ab officia quasi, architecto accusamus nam minus eum harum animi ad
        blanditiis corrupti magni fuga consectetur repellat! Atque, voluptatem
        eos. Ducimus suscipit aliquid, quas nemo minima laudantium
        necessitatibus corrupti esse praesentium perferendis! Expedita,
        laboriosam, magnam optio assumenda ratione atque laudantium facere cum
        repellendus debitis ipsam et consectetur in quo dolorem. Id, commodi
        omnis ratione iure maiores molestias tenetur neque illum odio
        reprehenderit? Unde aut doloremque dignissimos quo necessitatibus modi
        rem sit, asperiores blanditiis libero quisquam architecto voluptates
        enim magnam voluptatibus. Suscipit molestias beatae cum, totam iste eum
        repellendus commodi? Illo aperiam ullam quis. Recusandae earum eaque ex,
        vitae similique unde! Totam ratione inventore quo eum tempora,
        reiciendis adipisci dolore commodi.
      </div>
      <div className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        repellendus sint expedita aut incidunt non, iure illo numquam
        praesentium. Quisquam ratione odit assumenda distinctio ab? Ipsum illo
        exercitationem at deleniti. Molestiae eum at sapiente ipsum repellat
        provident, consequuntur facere tempora corporis incidunt. Ipsam deserunt
        rem ab et expedita, veritatis minus a molestiae culpa, harum eius
        ducimus mollitia quam? Impedit, error. Dicta, ex ratione. Vero
        voluptatem cupiditate, maiores est sunt corporis accusantium quae nam
        facere culpa iste beatae quod ipsum reprehenderit ea laudantium totam
        in! Dolorem architecto molestiae neque quis consequatur. Consequatur,
        facilis nesciunt perspiciatis, dolor modi eos esse perferendis deleniti
        aspernatur quod sint saepe. Doloribus voluptate voluptates non
        consequatur? Ullam culpa, reprehenderit exercitationem accusamus quae
        delectus voluptas commodi nesciunt cumque? Nesciunt optio quam, odit vel
        natus inventore, nisi fugiat, amet consequuntur aliquam obcaecati in.
        Cupiditate fugiat rerum voluptatem ad at dolorem minus maiores iste
        corrupti qui. Error deserunt amet quos? Quo nobis, dolorum impedit
        explicabo ad dicta qui laboriosam? Beatae, quo! Maxime, praesentium.
        Incidunt recusandae cumque dignissimos amet doloribus non. Dolorem illo
        sapiente odit accusantium? Cum saepe labore voluptate impedit? Eius
        tempore debitis sunt fugit laboriosam dignissimos distinctio enim natus
        ab officia quasi, architecto accusamus nam minus eum harum animi ad
        blanditiis corrupti magni fuga consectetur repellat! Atque, voluptatem
        eos. Ducimus suscipit aliquid, quas nemo minima laudantium
        necessitatibus corrupti esse praesentium perferendis! Expedita,
        laboriosam, magnam optio assumenda ratione atque laudantium facere cum
        repellendus debitis ipsam et consectetur in quo dolorem. Id, commodi
        omnis ratione iure maiores molestias tenetur neque illum odio
        reprehenderit? Unde aut doloremque dignissimos quo necessitatibus modi
        rem sit, asperiores blanditiis libero quisquam architecto voluptates
        enim magnam voluptatibus. Suscipit molestias beatae cum, totam iste eum
        repellendus commodi? Illo aperiam ullam quis. Recusandae earum eaque ex,
        vitae similique unde! Totam ratione inventore quo eum tempora,
        reiciendis adipisci dolore commodi.
      </div>
      <div className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        repellendus sint expedita aut incidunt non, iure illo numquam
        praesentium. Quisquam ratione odit assumenda distinctio ab? Ipsum illo
        exercitationem at deleniti. Molestiae eum at sapiente ipsum repellat
        provident, consequuntur facere tempora corporis incidunt. Ipsam deserunt
        rem ab et expedita, veritatis minus a molestiae culpa, harum eius
        ducimus mollitia quam? Impedit, error. Dicta, ex ratione. Vero
        voluptatem cupiditate, maiores est sunt corporis accusantium quae nam
        facere culpa iste beatae quod ipsum reprehenderit ea laudantium totam
        in! Dolorem architecto molestiae neque quis consequatur. Consequatur,
        facilis nesciunt perspiciatis, dolor modi eos esse perferendis deleniti
        aspernatur quod sint saepe. Doloribus voluptate voluptates non
        consequatur? Ullam culpa, reprehenderit exercitationem accusamus quae
        delectus voluptas commodi nesciunt cumque? Nesciunt optio quam, odit vel
        natus inventore, nisi fugiat, amet consequuntur aliquam obcaecati in.
        Cupiditate fugiat rerum voluptatem ad at dolorem minus maiores iste
        corrupti qui. Error deserunt amet quos? Quo nobis, dolorum impedit
        explicabo ad dicta qui laboriosam? Beatae, quo! Maxime, praesentium.
        Incidunt recusandae cumque dignissimos amet doloribus non. Dolorem illo
        sapiente odit accusantium? Cum saepe labore voluptate impedit? Eius
        tempore debitis sunt fugit laboriosam dignissimos distinctio enim natus
        ab officia quasi, architecto accusamus nam minus eum harum animi ad
        blanditiis corrupti magni fuga consectetur repellat! Atque, voluptatem
        eos. Ducimus suscipit aliquid, quas nemo minima laudantium
        necessitatibus corrupti esse praesentium perferendis! Expedita,
        laboriosam, magnam optio assumenda ratione atque laudantium facere cum
        repellendus debitis ipsam et consectetur in quo dolorem. Id, commodi
        omnis ratione iure maiores molestias tenetur neque illum odio
        reprehenderit? Unde aut doloremque dignissimos quo necessitatibus modi
        rem sit, asperiores blanditiis libero quisquam architecto voluptates
        enim magnam voluptatibus. Suscipit molestias beatae cum, totam iste eum
        repellendus commodi? Illo aperiam ullam quis. Recusandae earum eaque ex,
        vitae similique unde! Totam ratione inventore quo eum tempora,
        reiciendis adipisci dolore commodi.
      </div>
    </div>
  );
};

export default App;
