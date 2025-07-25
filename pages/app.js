let trabajos = [
    {
    id:'1', 
    categoria: 'proyecto',
    name:'Cordoba Odontologia',
    foto:'../img/imgArquitectura/Cordoba Odontologia/portada.jpg',
    direccion: './arqDetail/cordobaOdontologia.html'
    },
    {
    id:'2', 
    categoria: 'proyecto',
    name:'Aires Odontologia',
    foto:'../img/imgArquitectura/Aires Odontologia/00 2 Portada.jpg',
    direccion: './arqDetail/airesOdontologia.html'
    },
    {
    id:'3',
    categoria: 'proyecto',
    name: 'Parroquia San Francisco de Paula',
    foto: '../img/imgArquitectura/ParroquiaSanFranciscoPaula/Esquina 1.png',
    direccion: './arqDetail/sanFrancisco.html'
    },
    {
    id:'4',
    categoria: 'proyecto',
    name:'Stand Miller Building International',
    foto:'../img/imgArquitectura/SomosIndustria/Portada.jpg',
    direccion: './arqDetail/millerSomosIndustria.html'
    },
    {
    id:'5',
    categoria: 'proyecto',
    name: 'Sala Capitular Sion del Padre',
    foto: '../img/imgArquitectura/Sala Capitular/Portada Copia de Acceso 3.png',
    direccion: './arqDetail/salacapitularSion.html'
    },
    {  
    id:'6', 
    categoria: 'proyecto', 
    name:'Ph Pavon', 
    foto:'../img/imgArquitectura/Ph Pavon/TOP_PH-Pavon.jpg', 
    direccion: './arqDetail/pavon.html'
    },
    {
    id:'7',
     categoria: 'proyecto', 
     name:'Casa CH', 
     foto:'../img/imgArquitectura/casa-CH/casa-Ch.jpg',
     direccion: './arqDetail/casaCh.html'
    },
    {
     id:'8',
     categoria: 'proyecto',
     name:'Ph Olaya', 
     foto:'../img/imgArquitectura/Ph Olaya/PORTADA.jpg', 
     direccion: './arqDetail/phOlaya.html'
    },
    {
    id:'9',
    categoria: 'proyecto', 
    name:'Óptica Hipervisión', 
    foto:'../img/imgArquitectura/Óptica Hipervisión/OPTICA_Top.jpg', 
    direccion: './arqDetail/optica.html'
    },
    {
     id:'10', 
     categoria: 'proyecto', 
     name:'Casa CL', 
     foto:'../img/imgArquitectura/casa-CL/Casa-CL-ok.jpg', 
     direccion: './arqDetail/casaCl.html'
    },
    {
    id:'11', 
    categoria: 'proyecto', 
    name:'Capilla San Pantaleón', 
    foto:'../img/imgArquitectura/Capilla San Pantaleón/Capilla_Top.jpg', 
    direccion: './arqDetail/sanPanta.html'
    },
    {
        id:'12', 
        categoria: 'proyecto', 
        name:'Oficinas VUK', 
        foto:'../img/imgArquitectura/Oficinas VUK/PORTADA_VUK.jpg', 
        direccion: './arqDetail/vuk.html'
    },
    {
    id:'13', 
    categoria: 'proyecto', 
    name:'SUM Canning', 
    foto:'../img/imgArquitectura/SUM Canning/SUM_Portada.jpg', 
    direccion: './arqDetail/canning.html'
    },
    {
    id:'14', 
    categoria: 'proyecto', 
    name:'Stand Miller s.a.', 
    foto:'../img/imgArquitectura/Stand Miller s.a/EPIBA_Top.jpg', 
    direccion: './arqDetail/standMiller.html'
    },
    {
    id:'15', 
    categoria: 'concurso', 
    name:'Complejo Judicial Zapala', 
    foto:'../img/imgArquitectura/Concurso – Complejo Judicial Zapala/Portada-Zapala.jpg', 
    direccion: './arqDetail/complejoJudicial.html'
    },
    {
    id:'16', 
    categoria: 'concurso', 
    name:'Sede Institucional AHRCC', 
    foto:'../img/imgArquitectura/CONCURSO AHRCC/Portada.jpg', 
    direccion: './arqDetail/ahrcc.html'
    },
    {
    id:'17', 
    categoria: 'concurso', 
    name:'Ministerio de Desarrollo Humano y Articulación Solidaria', 
    foto:'../img/imgArquitectura/Concurso Ministerio Desarrollo Humano/VIEDMA_Top.jpg', 
    direccion: './arqDetail/ministerio.html'
    },
    {
    id:'18',
    categoria: 'concurso', 
    name:'Complejo de encuentros académicos de Fundación José A. Balseiro en S.C', 
    foto:'../img/imgArquitectura/CONCURSO Complejo de encuentros académicos de Fundación José A. Balseiro en S.C/PORTADA_Balseiro.jpg', 
    direccion: './arqDetail/balseiro.html'
    },
    {
    id:'19',
    categoria: 'concurso', 
    name:'Delegación Saladillo', 
    foto:'../img/imgArquitectura/CONCURSO AHRCC-2/SALADILLO_PORTADA.jpg', 
    direccion: './arqDetail/ahrcc-2.html'
    },
    {
    id:'20', 
    categoria: 'concurso', 
    name:'Casa Cañon', 
    foto:'../img/imgArquitectura/CONCURSO «Casa Cañon»/PORTADACASACANON.jpg',
    direccion: './arqDetail/casaCañon.html'
    },
   
  
]

const displayProducts = (trabajosToShow) =>{
    const arqContent = document.getElementById("arqContent")

    arqContent.innerHTML = ""

    trabajosToShow.forEach(trabajo =>{
        const div = document.createElement('div')
        div.innerHTML = `

                
                <a href = "${trabajo.direccion}" class="figure">
                    <img src="${trabajo.foto}" alt="${trabajo.name}">
                    <div class="nameHover">
                        <h3>${trabajo.name}</h3>
                    </div>
                </a>
                    
            
        `
        arqContent.appendChild(div)
    })
}

const filterTrabajos = (categoria)=>{
    const trabajosToShow = trabajos.filter(trabajo => trabajo.categoria === categoria)
    displayProducts(trabajosToShow)
}


const selectProyecto = document.getElementById('selectProyecto')
const selectConcurso = document.getElementById('selectConcurso')
const selectAll = document.getElementById('selectAll')

selectProyecto.addEventListener("click", ()=>{
    filterTrabajos('proyecto')
})
selectConcurso.addEventListener("click", ()=>{
    filterTrabajos('concurso')
})
selectAll.addEventListener("click", ()=>{
    filterTrabajos(trabajos)
})

displayProducts(trabajos)



