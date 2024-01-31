export function render3D(index, _x, _y, _z) {
  // Shift (0, 0, 0) to be the center of the world, not the rear-top-left
  x = _x - 0.5; y = _y - 0.5; z = _z
  // Get Cylindrical Coordinates
  r = 0.2; theta = atan2(y,x);

  // ... rest of render function

function cartesianToCylindrical(x, y, z) {
    radius = sqrt(x * x + y * y);
    // atan2 returns the angle in radians between the positive x-axis and the point (x, y)
    theta = atan2(y, x);

    // If you want theta to be in degrees instead of radians, uncomment the following line:
    // theta = theta * (180 / Math.PI);
    
    // Keep z-coordinate as it is
    cylindricalZ = z;
}

function distanceOnCylinder(r1, a1, z1, r2, a2, z2) {
  deltaTheta = abs(a1 - a2);
  if (deltaTheta > PI) {
    deltaTheta = PI2 - deltaTheta;
  }

  // Calculate the angular distance and linear distance and return the result directly
  return sqrt(r1 * r1 * deltaTheta * deltaTheta + (z1 - z2) * (z1 - z2));
}

function fastDistanceOnCylinder(r1, a1, z1, r2, a2, z2, threshold) {\
  // Skips the hard calculation if we know early that we are past some threshold.
  
  deltaTheta = abs(a1 - a2);
  if (deltaTheta > PI) {
    deltaTheta = PI2 - deltaTheta;
  }

  // OLD Faster way
  // Calculate the angular distance and linear distance and return the result directly
  // return sqrt(r1 * r1 * deltaTheta * deltaTheta + (z1 - z2) * (z1 - z2));

  // More explicit way - Now FASTER! Fail fast!
  linearDistance = abs(z1 - z2)
  if (linearDistance > threshold) {
    return linearDistance
  }
  
  angularDistance = r1 * deltaTheta
  if (angularDistance > threshold) {
    return 1000
  }

  return sqrt(angularDistance * angularDistance + linearDistance * linearDistance)
}
