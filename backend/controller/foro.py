import mysql.connector
from mysql.connector import Error

def __init__(self):
    try:
       self.conexion = mysql.connector.connect(
        host ='localhost',
        port = '3306',
        user = 'root',
        password = 'Imago2010',
        db = 'El-anzuelo' 
    )
    except mysql.connector.Error as descrpcionError:
        print ("No se coneccto", descrpcionError)


#Ingresar consulta a la seccion FORO - INSERT
def InsertarPost(self, titulo, post):
    if self.conexion.is_connected():
        try:
            cursor= self.conexion.cursor()
            sentenciaSQL= "INSERT INTO post VALUES(%s,%s)"
            data= (titulo,post)

            cursor.execute(sentenciaSQL,data)
            self.conexion.commit()
            self.conexion.closed()
       
        except:
            print ("No se pudo conectar a la base de datos")




#Eliminar consulta seccion FORO - DELETE
def EliminarPost (self, ID):
    if self.conexion.is_connected():
        try:
            cursor= self.conexion.cursor()
            sentenciaSQL = "DELETE from where post where id=ID"
            cursor.execute(sentenciaSQL)

            self.conexion.commit()
            self.conexion.closed()

        except:
             print ("No se pudo conectar a la base de datos")



#Ingresar consulta a la seccion FORO - INSERT
def InsertarPost(self, titulo, post):
    if self.conexion.is_connected():
        try:
            cursor= self.conexion.cursor()
            sentenciaSQL= "INSERT INTO post VALUES(%s,%s)"
            data= (titulo,post)

            cursor.execute(sentenciaSQL,data)
            self.conexion.commit()
            self.conexion.closed()
       
        except:
            print ("No se pudo conectar a la base de datos")




#Cambiar consulta a la seccion FORO - UPDATE
def InsertarPost(self, titulo, post):
    if self.conexion.is_connected():
        try:
            cursor= self.conexion.cursor()
            sentenciaSQL= "UPDATE INTO post VALUES(%s,%s)"
            data= (titulo,post)

            cursor.execute(sentenciaSQL,data)
            self.conexion.commit()
            self.conexion.closed()
       
        except:
            print ("No se pudo conectar a la base de datos")







    
       
