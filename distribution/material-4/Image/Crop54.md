# Crop54


```text
material-4/Image/Crop54
```

```text
include('material-4/Image/Crop54')
```



| Illustration | Crop54 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Crop54.png) | ![illustration for Crop54](../../material-4/Image/Crop54.Local.png) |




## Crop54

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Crop54
include('material-4/Image/Crop54')

' renders the element
Crop54('Crop54', 'Crop54', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crop54
include('material-4/Image/Crop54')

' renders the element
Crop54('Crop54', 'Crop54', 'an optional tech label', 'an optional description')
@enduml
```

