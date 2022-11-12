#buscar una consulta específica en el FORO
def buscarPost (self):
    if self.conexion.is_connected():
        try:
            cursor= self.conexion.cursor()
            sentenciaSQL= "SELECT * from post where titulo like '%DORADO%'" 
            cursor.execute(sentenciaSQL)
            resultadoFORO = cursor.fetchall()
            self.conexion.close()
            return resultadoFORO
        
        except:
             print ("No se pudo conectar a la base de datos")
