let trabajos = [
    {id:'1', categoria: 'proyecto', name:'Casa CH', foto:'../img/imgArquitectura/ejemplo.jpg', direccion: './arquitecturaDetail.html'},
    {id:'2', categoria: 'proyecto', name:'Casa CL – Vivienda unifamiliar', foto:'../img/imgArquitectura/ejemplo2.jpg', direccion: './arquitecturaDetail.html'},
    {id:'3', categoria: 'proyecto', name:'Ph Olaya – Remodelacion Vivienda unifamiliar', foto:'../img/imgArquitectura/ejemplo3.jpg', direccion: './arquitecturaDetail.html'},
    {id:'4', categoria: 'proyecto', name:'Oficinas VUK', foto:'../img/imgArquitectura/ejemplo4.jpg', direccion: './arquitecturaDetail.html'},
    {id:'5', categoria: 'proyecto', name:'Capilla San Pantaleón – Templo de culto', foto:'../img/imgArquitectura/ejemplo5.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'6', categoria: 'proyecto', name:'SUM Canning', foto:'../img/imgArquitectura/ejemplo6.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'7', categoria: 'proyecto', name:'Óptica Hipervisión', foto:'../img/imgArquitectura/ejemplo7.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'8', categoria: 'proyecto', name:'Ph Pavon – Vivienda unifamiliar', foto:'../img/imgArquitectura/ejemplo9.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'9', categoria: 'consurso', name:'CONCURSO «ZIG ZAG»', foto:'../img/imgArquitectura/ejemplo8.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'10', categoria: 'proyecto', name:'Stand Miller s.a.', foto:'../img/imgArquitectura/ejemplo10.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'11', categoria: 'concurso', name:'Complejo de encuentros académicos de Fundación José A. Balseiro en S.C', foto:'../img/imgArquitectura/ejemplo11.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'12', categoria: 'concurso', name:'«Llamador»', foto:'../img/imgArquitectura/ejemplo12.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'13', categoria: 'concurso', name:'«Camara Cereales»', foto:'../img/imgArquitectura/ejemplo13.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'14', categoria: 'concurso', name:'CONCURSO AHRCC', foto:'../img/imgArquitectura/ejemplo14.jpg', direccion: '/ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'15', categoria: 'concurso', name:'Ministerio de Desarrollo Humano y Articulación Solidaria', foto:'../img/imgArquitectura/ejemplo15.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'16', categoria: 'concurso', name:'«Casa Cañon»', foto:'../img/imgArquitectura/ejemplo17.jpg'},
    {id:'17', categoria: 'concurso', name:'Complejo Judicial Zapala', foto:'../img/imgArquitectura/ejemplo16.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
    {id:'18', categoria: 'concurso', name:'AHRCC', foto:'../img/imgArquitectura/ejemplo18.jpg', direccion: '../ManglarArquitectura/pages/arquitecturaDetail.html'},
  
]

const displayProducts = (trabajosToShow) =>{
    const arqContent = document.getElementById("arqContent")

    arqContent.innerHTML = ""

    trabajosToShow.forEach(trabajo =>{
        const div = document.createElement('div')
        div.innerHTML = `

                
                <a href = "${trabajo.direccion}">
                    <img src="${trabajo.foto}" alt="${trabajo.name}">
                    <div class="nameHover">${trabajo.name}</div>
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



/*--------------ZOOM------------------*/ 

