class Noticia:
    def __init__(self,pieImagenNoticia, imagenNoticia, nTitulo, nSubTitulo, nCuerpo,):
        self.nTitulo = nTitulo
        self.nSubTitulo = nSubTitulo
        self.nCuerpo = nCuerpo
        self.imagenNoticia=imagenNoticia
        self.pieImagen = pieImagenNoticia
    def __str__(self):
        return f'Titulo: {self.nTitulo}, Subtitulo: {self.nSubTitulo}, Cuerpo de noticia: {self.nCuerpo}'
    #Get&Set Titulo
    def getTitulo(self):
        return self.nTitulo
    def setTitulo(self, nTitulo):
        self.nTitulo = nTitulo
    #Get&Set SubTitulo
    def getSubTitulo(self):
        return self.nSubTitulo
    def setSubTitulo(self, nSubTitulo):
        self.nSubTitulo = nSubTitulo
    #Get&Set Cuerpo
    def getCuerpo(self):
        return self.nCuerpo
    def setCuerpo(self, nCuerpo):
        self.Cuerpo = nCuerpo
    #Get&Set Imagen
    def getImagen(self):
        return self.imagenNoticia
    def setimagenNoticia(self, imagenNoticia):
        self.Cuerpo = imagenNoticia
    #Get&Set Pie Imagen}
    def getPieImagen(self):
        return self.pieImagen
    def setPieImagen(self, pieImagen):
        self.nSubTitulo = pieImagen
