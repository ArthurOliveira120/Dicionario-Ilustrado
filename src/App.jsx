import { Main } from "../src/components/Main";
import { Item } from "../src/components/Item";
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mitose" element={<Item title="Mitose" description="Divisão celular que gera duas células-filhas idênticas. Responsável pelo crescimento e regeneração do organismo." img="https://djalmasantos.wordpress.com/wp-content/uploads/2015/08/012.jpg" />} />
          <Route path="/meiose" element={<Item title="Meiose" description="Divisão celular que gera quatro células, cada uma com meade dos cromossomos. Responsável pela criação dos gametas." img="https://www.coladaweb.com/wp-content/uploads/2014/12/20200922-meiose.png" />} />
          <Route path="/carioteca" element={<Item title="Carioteca" description="Membrana que envolve o núcleo da célula, responsável por protegê-lo." img="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-nucleo-envolto-por-uma-membrana-apresenta-em-seu-interior-os-cromossomos-5a86b19fdc671.jpg" />} />
          <Route path="/cromatina" element={<Item title="Cromatina" description="Conjunto de fios de DNA e proteínas no núcleo, que se condensa para formar os cromossomos." img="https://www.infoescola.com/wp-content/uploads/2010/06/cromatina_1640805628-768x621.jpg" />} />
          <Route path="/cromossomo" element={<Item title="Cromossomo" description="Formado pela cromatina condensada, responsável por carregar os genes da célula." img="https://media.istockphoto.com/id/916486974/pt/vetorial/telomere-is-the-end-of-a-chromosome.jpg?s=612x612&w=0&k=20&c=3ocAOA3Nj4dD6SQQqlcFJZ4yLuzy1B6QH9dLbCgWmK0=" />} />
          <Route path="/cromossomos-homologos" element={<Item title="Cromossomos Homólogos" description="Par de cromossomos (um da mãe e outro do pai) que possuem genes para as mesmas características." img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaxeMSnSuDuYbmv2nv9l5TBUWIQttXmWuww&s" />} />
          <Route path="/cromatide" element={<Item title="Cromátide" description="Cada uma das duas partes idênticas de um cromossomo duplicado." img="https://static.biologianet.com/2023/08/cromatide-irmas.jpg" />} />
          <Route path="/cromatides-irmas" element={<Item title="Cromátides Irmãs" description="As duas cromátides idênticas de um cromossomo que foi duplicado, unidas por um centrômero." img="https://media.istockphoto.com/id/1474939366/pt/vetorial/chromatid-and-sister-chromatids.jpg?s=612x612&w=0&k=20&c=JNUy5d9slzYEQkLIQWm-EZ589BP-K7id8E7R_bTnzZE=" />} />
          <Route path="/centromero" element={<Item title="Centrômero" description="Região onde as cromátides irmãs estão unidas, e onde se ligam as fibras do fuso." img="https://s4.static.brasilescola.uol.com.br/img/2018/06/partes-cromossomo.jpg" />} />
          <Route path="/centrossomo" element={<Item title="Centrossomo" description="Organela que organiza o fuso mitótico/meiótico e contém os centríolos nas células animais." img="https://www.atlasdocorpohumano.com/p/thumb/celulas/estruturas-celulares/espaco-intracelular/citoplasma/estruturas-citoplasmaticas/citoesqueleto/centro-organizador-dos-microtubulos/centrossomo.jpg" />} />
          <Route path="/fuso-mitotico-meiotico" element={<Item title="Fuso Mitótico ou Meiótico" description="Conjunto de fibras (microtúbulos) que movimentam os cromossomos durante a divisão celular." img="https://netnature.wordpress.com/wp-content/uploads/2015/10/sem-tc3adtulo32.jpg" />} />
          <Route path="/profase" element={<Item title="Prófase" description="Fase em que os cromossomos se condensam, a carioteca se desorganiza e o fuso começa a se formar." img="https://www.colegioweb.com.br/wp-content/uploads/18543.jpg" />} />
          <Route path="/metafase" element={<Item title="Metáfase" description="Fase em que os cromossomos se alinham no centro da célula." img="https://www.colegioweb.com.br/wp-content/uploads/18545.jpg" />} />
          <Route path="/anafase" element={<Item title="Anáfase" description="Fase em que as cromátides irmãs se separam e são puxadas para os polos opostos da célula." img="https://www.colegioweb.com.br/wp-content/uploads/18546.jpg" />} />
          <Route path="/telofase" element={<Item title="Telófase" description="Fase em que os cromossomos se descondensam e duas novas cariotecas se formam." img="https://www.colegioweb.com.br/wp-content/uploads/18547.jpg" />} />
          <Route path="/citocinese" element={<Item title="Citocinese" description="Divisão do citoplasma, que separa a célula em duas novas células ao final da mitose ou meiose." img="https://www.coladaweb.com/wp-content/uploads/2014/12/20171202-mitose4.jpg" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
