### import o socket.io

aqui coloca se o server  e a permissão
 io =socket(server, {cors:{origin: "*"}});
 on() = receber a resposta
emit() =  para efetua  uma emissão do evento o servidor envia para o navegador  responder tera o on() recebe a resposta!

// recebe como parametro o socket
on("connection",(socket)=>{
    Quando se faz uma requisição pra esse back end  vai gerar um id
    seria uma resposta
    console.log(socket.id)
})
liberar a permissão
 usar o cors

// vai para front End







