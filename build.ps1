Remove-Item dist -Recurse
Remove-Item lib -Recurse
mkdir dist
mkdir lib
npm run build
