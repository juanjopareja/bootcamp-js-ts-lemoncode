#Creación del primer commit

##Modificación desde la rama "development"

## Paso a paso
Añadimos un nuevo repositorio en GitHub:
![01](https://user-images.githubusercontent.com/125128610/233599293-fe7d11e4-5364-4bad-a84b-aaded72d5c49.png)


Le damos un nombre y le damos a crear:
![02](https://user-images.githubusercontent.com/125128610/233599442-89e8c1ee-3bcc-424a-a39c-3647d967938d.png)
![03](https://user-images.githubusercontent.com/125128610/233599452-bf8daa09-01cc-4eee-9691-a06eec9c9eae.png)

Copiamos la dirección del enlace del repositorio:

![04](https://user-images.githubusercontent.com/125128610/233599632-d9498df6-92ee-46b2-b9ee-58daf113d2d8.png)

Accedemos con la consola dentro del directorio en nuestro local y lo clonamos:

![05](https://user-images.githubusercontent.com/125128610/233599787-735d9e12-cef3-493f-a9d8-76e5bfddae0b.png)

Accedemos al repositorio clonado y abrimos VSCode:

![06](https://user-images.githubusercontent.com/125128610/233599954-90042ce0-00a8-45e0-9c1c-f7fcdb7e0fe6.png)

Creamos un nuevo archivo "readme.md" dentro del mismo:

![07](https://user-images.githubusercontent.com/125128610/233600206-5f222d1b-ae34-459d-af23-7ec36b138236.png)

Modificamos el archivo, hacemos un commit y un push al repositorio:

![08](https://user-images.githubusercontent.com/125128610/233600474-8716a96b-97ef-43e9-9867-a32bb1a616fa.png)

Comprobamos que los cambios se han efectuado en el mismo desde GitHub:

![09](https://user-images.githubusercontent.com/125128610/233600758-1928b02a-e20a-430f-a239-4af5d285fe33.png)

Creamos la rama "development", comprobamos que se haya creado correctamente y nos cambiamos a la misma:

![10](https://user-images.githubusercontent.com/125128610/233600916-9f123ea4-a71b-4b52-afd7-2a77d0244555.png)

Modificamos el archivo "readme.md" añadiéndole una nueva línea. Le hacemos un nuevo commit:

![11](https://user-images.githubusercontent.com/125128610/233601216-0623214a-2dfd-4166-b05c-f3da2f38fc89.png)

Le hacemos push de nuevo:

![12](https://user-images.githubusercontent.com/125128610/233601278-66840499-0460-42ed-a823-2c17daa6b9d7.png)

Comprobamos otra vez dentro del repositorio de GitHub que los cambios se han efectuado:

![13](https://user-images.githubusercontent.com/125128610/233601511-78ddf7fb-f058-4181-bfd9-3935356a982b.png)

Nos cambiamos a la rama "main", hacemos un merge con la rama "development" y le hacemos un nuevo push:

![14](https://user-images.githubusercontent.com/125128610/233601729-f3886311-69b9-4972-8733-b8e6988012ae.png)

Finalmente comprobamos que la rama "main" contiene los cambios efectuados en la rama "development" tras el merge:

![15](https://user-images.githubusercontent.com/125128610/233602973-abe64454-ee2a-4418-aa0e-6f1497d1954b.png)

Una vez hecho el proceso, editamos el archivo readme.md desde el propio GitHub para explicar el paso a paso.
