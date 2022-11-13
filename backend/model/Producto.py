class Producto:
    def __init__(self, nom, des, pre,prodId):
        self.nombre=nom
        self.descripcion=des
        self.precio=pre
        self.pId=prodId
    def __str__(self):
        return f'Nombre producto: {self.nombre}, Descripción: {self.descripcion},Precio: {self.precio},ID producto: {self.pId}.'
    #Get&Set Nombre
    def getNombre(self):
        return self.nombre
    def setNombre(self, n):
        self.nombre = n
    #Get&Set Descripcio
    def getDescripcion(self):
        return self.descripcion
    def setDescripcion(self, n):
        self.descripcion = n
    #Get&Set Precio
    def getPrecio(self):
        return self.precio
    def setPrecio(self, n):
        self.precio = n

    #Get&Set id de producto
    def getId(self):
        return self.pId
    def setId(self, n):
        self.pId = n