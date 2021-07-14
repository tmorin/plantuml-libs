# Brush


```text
material-4/Image/Brush
```

```text
include('material-4/Image/Brush')
```



| Illustration | Brush |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Brush.png) | ![illustration for Brush](../../material-4/Image/Brush.Local.png) |




## Brush

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Brush
include('material-4/Image/Brush')

' renders the element
Brush('Brush', 'Brush', 'an optional tech label')
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

' loads the Item which embeds the element Brush
include('material-4/Image/Brush')

' renders the element
Brush('Brush', 'Brush', 'an optional tech label')
@enduml
```

