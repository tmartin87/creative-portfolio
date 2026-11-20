type Vector3Tuple = [number, number, number]

export type Destination = {
  id: string
  title: string
  description: string
  cameraPosition: Vector3Tuple
  lookAt: Vector3Tuple
}

export const destinations: Destination[] = [
  {
    id: 'intro',
    title: 'Creative Developer',
    description:
      'Explorando la conexión entre código, movimiento y experiencias digitales.',
    cameraPosition: [0, 0, 5],
    lookAt: [0, 0, 0],
  },
  {
    id: 'project-01',
    title: 'Proyecto 01',
    description:
      'Un espacio reservado para presentar el primer proyecto del portfolio.',
    cameraPosition: [4, 1, 5],
    lookAt: [4, 0, 0],
  },
]