class Foro:
    def __init__(self, pTitulo, pPost,):
        self.titulo = pTitulo
        self.post = pPost
    def __str__(self):
        return f'Titulo: {self.titulo}, Post: {self.post}'
    def getTitulo(self):
        return self.titulo 
    def setTitulo(self, titulo):
        self.titulo = titulo   
    def setPost(self, post):
        self.post = post  
    