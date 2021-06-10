# Satellite


```text
fontawesome-5/Solid/Satellite
```

```text
include('fontawesome-5/Solid/Satellite')
```



| Illustration | Satellite |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Satellite.png) | ![illustration for Satellite](../../fontawesome-5/Solid/Satellite.Local.png) |




## Satellite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Satellite
include('fontawesome-5/Solid/Satellite')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Satellite
include('fontawesome-5/Solid/Satellite')

' renders the element
Satellite('Satellite', 'Satellite', 'an optional tech label')
@enduml
```

