# Brush


```text
material/Image/Brush
```

```text
include('material/Image/Brush')
```



| Illustration | Brush |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Brush.png) | ![illustration for Brush](../../material/Image/Brush.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrushXs>`
- `<$BrushSm>`
- `<$BrushMd>`
- `<$BrushLg>`





## Brush

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Brush
include('material/Image/Brush')

' renders the element
Brush('Brush', 'Brush', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Brush
include('material/Image/Brush')

' renders the element
Brush('Brush', 'Brush', 'an optional tech label', 'an optional description')
@enduml
```

