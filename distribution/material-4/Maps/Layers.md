# Layers


```text
material-4/Maps/Layers
```

```text
include('material-4/Maps/Layers')
```



| Illustration | Layers |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Layers.png) | ![illustration for Layers](../../material-4/Maps/Layers.Local.png) |




## Layers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Layers
include('material-4/Maps/Layers')

' renders the element
Layers('Layers', 'Layers', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Layers
include('material-4/Maps/Layers')

' renders the element
Layers('Layers', 'Layers', 'an optional tech label', 'an optional description')
@enduml
```

