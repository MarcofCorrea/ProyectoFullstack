class Producto:
    def __init__(self,est ,cor,ordid, env, direnv,tel):
        self.oId=ordid
        self.opEnvio=env
        self.dirEnvio=direnv
        self.telefono=tel
        self.correo=cor
        self.estado=est
    def __str__(self):
        return f'ID Orden: {self.oId}, Opcion de envío: {self.opEnvio},Dirección de envio: {self.dirEnvio},Telefono: {self.telefono},Email: {self.correo},Estado: {self.estado}.'

    #Get&Set ID orden
    def getIdOrden(self):
        return self.oId
    def setIdOrden(self, n):
        self.oId = n
    #Get&Set Op envio
    def getOpEnvio(self):
        return self.opEnvio
    def setOpEnvio(self, n):
        self.opEnvio = n
    #Get&Set direccion envio
    def getdirEnvio(self):
        return self.dirEnvio
    def setdirEnvio(self, n):
        self.dirEnvio = n
    #Get&Set telefono
    def getTelefono(self):
        return self.telefono
    def setTelefono(self, n):
        self.telefono = n
    #Get&Set Correo
    def getCorreo(self):
        return self.correo
    def setcorreo(self, n):
        self.correo = n
    #Get&Set Estado
    def getEstado(self):
        return self.oId
    def setEstado(self, n):
        self.estado = n
'''----------------------------------------------------------------'''
class Direccion:
    def __init__(self,pai, dirp,prov,ciu,cp):
        self.dir=dirp
        self.pais=pai
        self.provincia=prov
        self.ciudad=ciu
        self.codigoPostal=cp
    def __str__(self):
        return f'Dirección: {self.dir},Pais: {self.pais},Provincia: {self.provincia},Ciudad: {self.ciudad},Codigo Postal: {self.codigoPostal}.'

    #Get&Set Direccion
    def getDireccion(self):
        return self.dir
    def setDireccion(self, n):
        self.dir = n
    #Get&Set Pais
    def getPais(self):
        return self.pais
    def setPais(self, n):
        self.pais = n
    #Get&Set Provincia
    def getProvicia(self):
        return self.provincia
    def setProvincia(self, n):
        self.provincia = n
    #Get&Set Ciudad
    def getCiudad(self):
        return self.ciudad
    def setCiudad(self, n):
        self.ciudad = n
    #Get&Set Codigo Postal
    def getCodigoPostal(self):
        return self.codigoPostal
    def setCodigoPostal(self, n):
        self.codigoPostal = n
