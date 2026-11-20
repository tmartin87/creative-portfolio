type Vector3Tuple = [number, number, number]

export type Destination = {
  id: string
  title: string
  cameraPosition: Vector3Tuple
  lookAt: Vector3Tuple
}

export const destinations: Destination[] = [
  {
    id: 'intro',
    title: 'Inicio',
    cameraPosition: [0, 0, 5],
    lookAt: [0, 0, 0],
  },
  {
    id: 'project-01',
    title: 'Proyecto 01',
    cameraPosition: [4, 1, 5],
    lookAt: [4, 0, 0],
  },
]