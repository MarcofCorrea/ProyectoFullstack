class Rol:
    def __init__(self,rol):
        self.rolUser = rol
    def __str__(self):
        return f'Rol: {self.rolUser}'
    #Get&Set Categoria
    def rol(self):
        return self.rolUser
    def setId(self, rolU):
        self.rolUser = rolU
