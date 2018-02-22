/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var LoveTrianglesCount, s1, s2, s3;
  LoveTrianglesCount = 0;
  for(var i=0;i<preferences.length;i++){
	  s1 = preferences[i]-1;
	  s2 = preferences[s1]-1;
	  s3 = preferences[s2]-1;
	if ((s3 == i) && (s1 != s2) && (s2 != s3) && (s1 != s3)){
		LoveTrianglesCount++;
	}
  }
  if (LoveTrianglesCount > 0) LoveTrianglesCount = LoveTrianglesCount / 3; 
  return LoveTrianglesCount;
};

