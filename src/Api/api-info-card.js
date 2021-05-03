import { Simulate } from "react-dom/test-utils";

export const imoveis = [

        {
                "id": "0",
                "Nameimovel": "Apto com vista incrível de frente p/ o mar JBM303",
                "Description": "Apartamento aconchegante em condomínio pé na areia privilegiado em Jurerê.",
                "guests": "3 Hóspedes",
                "Cleaningfee": "0",
                "Caucao": "174",
                "Neighborhood": "Jurerê Rua Jornalista Haroldo Calado",
                "image": require("../img/imovel1.webp").default,
                "Status":"Ativo",
                "Fulladdress":"Jurerê Rua Jornalista Haroldo Calado, 305",
              
               
                "listofItens":["TV", "Wi-fi", "Estacionamento",  "Elevador"]
        },
        {
                "id": "1",
                "Nameimovel": "Apto confortável com sacada a 350m da praia ELU103",
                "Description": "Ótimo apartamento na melhor região de Jurerê Tradicional, a 5 min a pé da beira praia e com diversas opções de comércio nos arredores.",
                "guests": "4 Hóspedes",
                "Cleaningfee": "0",
                "Caucao": "150",
                "Neighborhood": "Jurerê Rua Professor Renato Barbosa",
                "image": require("../img/imovel2.webp").default,
                "Status":"Ativo",
                "Fulladdress":"Jurerê Rua Professor Renato Barbosa, 227  ",
                "listofItens":["TV", "Wi-fi", "Estacionamento",  "Elevador","Ar Condicionado","Assentos na Sala de Jantar"]
              
        },
        {
                "id": "2",
                "Nameimovel": "Studio melhor vista mar resort de Jurerê ILC3413",
                "Description": "A partir da sacada, você pode curtir a brisa e a vista de um fim de tarde ou acordar e verificar se o dia está para praia ou para uma piscina aquecida.",
                "guests": "4 Hóspedes",
                "Cleaningfee": "0",
                "Caucao": "280",
                "Neighborhood": "Jurerê leste",
                "image": require("../img/imovel3.webp").default,
                "Status":"Ativo",
                "Fulladdress":"Jurerê Internacional Avenida dos Búzios, 1760  ",
                "listofItens":["TV", "Wi-fi", "Estacionamento",  "Elevador","Ar Condicionado","Assentos na Sala de Jantar"]
              
        },
        {
                "id": "3",
                "Nameimovel": "Conforto e tranquilidade na quadra do mar PSD205",
                "Description": "Apartamento espaçoso na quadra da praia e com uma localização perfeita para curtir o movimento de bares e restaurantes. Mercado em frente ao apartamento.",
                "guests": "4 Hóspedes",
                "Cleaningfee": "0",
                "Caucao": "93",
                "Neighborhood": "Jurerê leste",
                "image": require("../img/imovel4.webp").default,
                "Status":"Ativo",
                "Fulladdress":"Jurerê Internacional Alameda César Nascimento, 138  ",
                "listofItens":["TV", "Wi-fi", "Estacionamento",  "Elevador","Ar Condicionado","Assentos na Sala de Jantar"]
              
        },
        {
                "id": "4",
                "Nameimovel": "Cobertura reformada em resort de luxo ILC3503",
                "Description": "Relaxar, desestressar e curtir o sol em um dos lugares mais bonitos do Brasil e em uma das COBERTURAS mais premium de Jurere Internacional.",
                "guests": "4 Hóspedes",
                "Cleaningfee": "0",
                "Caucao": "350",
                "Neighborhood": "Jurerê Avenida dos Búzios" ,
                "image": require("../img/imovel5.webp").default,
                "Status":"Ativo",
                "Fulladdress":"Jurerê Avenida dos Búzios, 1760",
                "listofItens":["TV", "Wi-fi", "Estacionamento",  "Elevador","Ar Condicionado","Assentos na Sala de Jantar"]
              
        },
        {
                "id": "5",
                "Nameimovel": "Apto novo em prédio c/ piscina nos Ingleses RTG208",
                "Description": "O apartamento é novo e confortável, com churrasqueira privativa e piscina no condomínio. Possui ótima localização no bairro dos Ingleses. Perfeito para uma família ou um grupo de amigos.",
                "guests": "4 Hóspedes",
                "Cleaningfee": "0",
                "Caucao": "110",
                "Neighborhood": "Ingleses Rua Ilha das Galés",
                "image": require("../img/imovel6.webp").default,
                "Status":"Ativo",
                "Fulladdress":"Ingleses Rua Ilha das Galés, 380",
                "listofItens":["TV", "Wi-fi", "Estacionamento",  "Elevador","Ar Condicionado","Assentos na Sala de Jantar"]
              
        }
        
]
// "listofItens":[{"TV":"true", "Wi-fi":"false", "Estacionamento":"true",  "Elevador":"true"}]
// "listofItens":["TV:true, Wi-fi, Estacionamento,  Elevador"]