export const holographicVertexShader = /* glsl */ `
  varying vec3 vViewPosition;
  varying vec3 vViewNormal;
  varying float vHeight;

  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);

    vViewPosition = viewPosition.xyz;
    vViewNormal = normalize(normalMatrix * normal);
    vHeight = position.y;

    gl_Position = projectionMatrix * viewPosition;
  }
`
export const holographicFragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;

  varying vec3 vViewPosition;
  varying vec3 vViewNormal;
  varying float vHeight;

  void main() {
    vec3 normal = normalize(vViewNormal);
    vec3 viewDirection = normalize(-vViewPosition);

    float facing = abs(dot(normal, viewDirection));
    float rim = pow(1.0 - clamp(facing, 0.0, 1.0), 2.0);

    float wave = sin(vHeight * 35.0 - uTime * 1.5);
    float scanline = smoothstep(0.3, 0.8, wave);

    float opacity = clamp(
      0.08 + rim * 0.55 + scanline * 0.12,
      0.0,
      0.8
    );

    gl_FragColor = vec4(uColor, opacity);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`