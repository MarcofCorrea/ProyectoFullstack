class Usuario:
    def __init__(self, nom, ap, fech,dir,uId):
        self.nombre=nom
        self.apellido=ap
        self.fecha=fech
        self.direccion=dir
        self.id=uId
    def __str__(self):
        return f'Nombre: {self.nombre}, Apellido: {self.apellido},Fecha de nacimiento: {self.fecha},Dirección: {self.direccion},ID: {self.id},'
    #Get&Set Nombre
    def getNombre(self):
        return self.nombre
    def setNombre(self, n):
        self.nombre = n
    #Get&Set Apellido
    def getApellido(self):
        return self.apellido
    def setApellido(self, n):
        self.apellido = n
    #Get&Set Fecha
    def getFecha(self):
        return self.fecha
    def setFecha(self, n):
        self.fecha = n
    #Get&Set direccion
    def getDireccion(self):
        return self.direccion
    def setDireccion(self, n):
        self.direccion = n
    #Get&Set id
    def getId(self):
        return self.id
    def setId(self, n):
        self.id = n