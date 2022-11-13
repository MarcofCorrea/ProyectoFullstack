import mysql.connector

class Usuario():

    def__init__(self) ->None:
      try:
        self.conexion= mysql.connector.connect(
            host='172.0.0.1',
            port= 3306,
            user = 'root'
            password= 'Contraseña'
            bd= 'bd'

        )  
except mysql.Connection.Error as descripcionError:

    print("¡No se conecto!", descripcionError)

def InsertarValor (self,nombre, password, email):
    if self.conexion.is_connect():
        try:
            cursor=self.conexion.cursor()
            sentenciasSQL= "INSERT INTO table VALUE('idUsuario', 'passwordd', 'email')"
            data=(nombre,password,email)

            cursor.excute(sentenciasSQL,data)
            self.conexion.commit ()
            self.conexion.close()

        except:
            print("No se pudo conectar a la base de datos")

   
    def BuscarObjeto(self, nombre):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "SELECT * from tabla where nombre like '%MAR%' "
                cursor.execute(sentenciaSQL)
                resultadoREAD = cursor.fetchall()
                self.conexion.close()
                return resultadoREAD

            except:
                print("No se pudo concectar a la base de datos")






