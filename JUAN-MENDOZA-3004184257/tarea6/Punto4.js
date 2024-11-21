const estudiantes = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
      genero: "Femenino",
      carrera: "Ingeniería Civil",
      ciudad: "Bogotá",
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
      genero: "Masculino",
      carrera: "Medicina",
      ciudad: "Medellín",
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
      genero:"Femenino",
      carrera: "Administración de Empresas",
      ciudad: "Cali",
    },
    {
      nombre: "Pedro",
      edad: 23,
      promedio: 82,
      genero: "Masculino",
      carrera:"Derecho",
      ciudad:"Barranquilla",
    },
    {
      nombre: "Laura",
      edad: 24,
      promedio: 88,
      genero: "Femenino",
      carrera:" Arquitectura",
      ciudad: "Cartagena",
    },
    {
      nombre: "Carlos",
      edad: 20,
      promedio: 75,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre:"Sofía",
      edad: 22,
      promedio: 95,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
  ];
  const promedioMasAlto = Math.max(...estudiantes.map(estudiante => estudiante.promedio));
  const estudianteConPromedioAlto = estudiantes.filter(estudiante => estudiante.promedio === promedioMasAlto)[0];
  console.log("Estudiante con el promedio más alto:");
  console.log(`Nombre: ${estudianteConPromedioAlto.nombre}, Edad: ${estudianteConPromedioAlto.edad}`);
  const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
  console.log("Estudiantes mayores de 20 años:");
  console.log(estudiantesMayores);
  