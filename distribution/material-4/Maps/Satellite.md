# Satellite


```text
material-4/Maps/Satellite
```

```text
include('material-4/Maps/Satellite')
```



| Illustration | Satellite |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Satellite.png) | ![illustration for Satellite](../../material-4/Maps/Satellite.Local.png) |




## Satellite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Satellite
include('material-4/Maps/Satellite')

' renders the element
Satellite('Satellite', 'Satellite', 'an optional tech label')
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

' loads the Item which embeds the element Satellite
include('material-4/Maps/Satellite')

' renders the element
Satellite('Satellite', 'Satellite', 'an optional tech label')
@enduml
```

