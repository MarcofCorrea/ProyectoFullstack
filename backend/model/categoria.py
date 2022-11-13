class Categoria:
    def __init__(self,idCat):
        self.idCategoria = idCat
    def __str__(self):
        return f'Categoria: {self.idCategoria}'
    #Get&Set Categoria
    def getId(self):
        return self.idCategoria
    def setId(self, idCategoria):
        self.idCategoria = idCategoria


