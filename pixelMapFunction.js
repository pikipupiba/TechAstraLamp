function (pixelCount) {
  ledsPerTurn = 10.5
  var map = []

  for (i = 0; i < pixelCount; i++) {
    // Calculate the angle in radians
    theta = 2 * 3.14159 * (i / (ledsPerTurn-1))

    // Z-coordinate (normalized)
    z = i / pixelCount

    // Convert cylindrical to Cartesian coordinates and normalize between 0 and 1
    x = 0.8 + 0.2 * Math.cos(theta)
    y = 0.8 + 0.2 * Math.sin(theta)

    map.push([x, y, z])
  }

  return map
}
