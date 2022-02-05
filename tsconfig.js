{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                    
    "lib": ["es6", "dom"],                     
    "allowJs": true,
    "outDir": "build",                          
    "rootDir": "src",
    "strict": true,         
    "noImplicitAny": false,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "types": ["reflect-metadata","node"],
    "typeRoots": [ "../node_modules/@types" ],
    "moduleResolution" : "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strictNullChecks":false
  }
}