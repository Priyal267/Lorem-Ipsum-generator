const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

document.getElementById('generate').addEventListener('click',()=>{
    const paragraphs=document.getElementById('paragraphs').value;
    const output=document.getElementById('output');
    output.innerHTML=' ';
    const para=parseInt(paragraphs);
    if(para<1 || para>10){
        output.innerHTML="Enter a valid number between 1 to 10";
        return;
    }
    let text=' ';
    for(i=0;i<para;i++){
        text+=`<p>${loremText}</p>`;
    }
    output.innerHTML=text;

});





