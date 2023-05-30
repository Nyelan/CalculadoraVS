var num = parseFloat(prompt("Digite um número: "));

        try{
            print(num);
        }
        catch(e){
            alert(e);
            print(0);
        }
        function iniciarCalculo(x){
            var n1 = parseFloat(document.querySelector(".tela").textContent);

            var n2 = parseFloat(prompt("Digite outro número: "));

            try{
                var res = calcular(x, n1, n2);
            }
            catch(e){
                alert(e)
                print(0);
            }

            var res = calcular(x, n1, n2);

            print(res);
        }

        function print(num){

            if(isNaN(num)){
            throw new Error("Somente números.");
            }

            var tela = document.querySelector(".tela").innerHTML = num;
        }

        function calcular(x, n1, n2){

            if(x !== "soma" && x !== "sub" && x !== "mult" && x !== "divi"){
                throw new Error("Função inválida.");
            }

            if( isNaN(n1) || isNaN(n2) ){
                throw new Error("Somente números.");
            }

            var numCalculado = null;

            switch(x){
                case 'soma':
                    numCalculado = n1 + n2;
                    break;
                case 'sub':
                    numCalculado = n1 - n2;
                    break;
                case 'mult':
                    numCalculado = n1 * n2;
                    break;
                case 'divi':
                    numCalculado = n1 / n2;
            }   
            
            return numCalculado;    
        }

        function limpar(){
            num = 0;
            print(num);
        }