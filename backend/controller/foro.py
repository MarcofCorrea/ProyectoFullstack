import mysql.connector
from mysql.connector import Error

def __init__(self):
    try:
       self.conexion = mysql.connector.connect(
        host ='localhost',
        port = '3306',
        user = 'root',
        password = 'root'
        db = 'El-anzuelo' 
    )
    except mysql.connector.Error as descrpcionError:
        print ("No se coneccto", descrpcionError)



   


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





    
       
