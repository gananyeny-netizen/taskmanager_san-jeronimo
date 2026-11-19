export function showArquiView(container, presenter)
{
    container.innerHTML = `
    
        <h1> yo soy yeni sirley y este es el taller del parcial  </h1>
        
       

`;


container.addEventListener("click", (event) =>{
    const  link=event.target.closest("[data-view]");

    if(!link) return;
    event.preventDefault();
    navigate(link.dataset.view);


} ); 

}