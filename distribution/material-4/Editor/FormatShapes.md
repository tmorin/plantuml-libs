# FormatShapes


```text
material-4/Editor/FormatShapes
```

```text
include('material-4/Editor/FormatShapes')
```



| Illustration | FormatShapes |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatShapes.png) | ![illustration for FormatShapes](../../material-4/Editor/FormatShapes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatShapesXs>`
- `<$FormatShapesSm>`
- `<$FormatShapesMd>`
- `<$FormatShapesLg>`





## FormatShapes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatShapes
include('material-4/Editor/FormatShapes')

' renders the element
FormatShapes('FormatShapes', 'Format Shapes', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatShapes
include('material-4/Editor/FormatShapes')

' renders the element
FormatShapes('FormatShapes', 'Format Shapes', 'an optional tech label', 'an optional description')
@enduml
```

