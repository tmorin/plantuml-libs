# Plane


```text
fontawesome-5/Solid/Plane
```

```text
include('fontawesome-5/Solid/Plane')
```



| Illustration | Plane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Plane.png) | ![illustration for Plane](../../fontawesome-5/Solid/Plane.Local.png) |




## Plane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Plane
include('fontawesome-5/Solid/Plane')

' renders the element
Plane('Plane', 'Plane', 'an optional tech label')
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

' loads the Item which embeds the element Plane
include('fontawesome-5/Solid/Plane')

' renders the element
Plane('Plane', 'Plane', 'an optional tech label')
@enduml
```

