// $(document).ready(function(){
//     $(".formcadastro").on('submit',function(e){
//         var erro = false;
//         var dataUSER = {
//             "nome" : $("#name").val(),
//             "CPF" : $("#cpf").val(),
//             "datebirth" : $("#datebirth").val(),
//             "telefone" : $("#tel").val(),
//             "email" : $("#email").val(),
//             "password" : $("#password").val()
//         }
//         $("input").empty();
//         console.log(e);
//             if(!/[0-9]{11}/.test(dataUSER.telefone)){
//                 $("#tel").css({
//                     "border": "2px solid #ff8787"
//                 });
//                 erro = true;
//             }
//             if(erro)
//             e.preventDefault();
//             })
// });

$(document).ready(function(){
    $('#cpf').mask('999.999.999-99',{reverse: true});
})