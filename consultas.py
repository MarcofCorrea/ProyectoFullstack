import mysql.connector

class Usuario():

    def__init__(self) ->None:
      try:
        self.conexion= mysql.connector.connect(
            host='localhost',
            port= 3306,
            user = 'root'
            password= 'Contraseña'
            bd= 'basededatosprueva'

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




