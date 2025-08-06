def contator(string:str): 
    string = string.lower().split() 
    pos = 0 
    dicionario = dict() 
    for palavra in string: 
        quantidade = string.count(palavra) 
        dicionario[f"{string[pos]}"] = quantidade 
        pos += 1 
    return dicionario
    
teste = contator("Esse exercício é um Exercício fácil ou difícil")
print(teste)