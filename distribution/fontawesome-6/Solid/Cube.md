# Cube


```text
fontawesome-6/Solid/Cube
```

```text
include('fontawesome-6/Solid/Cube')
```



| Illustration | Cube |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Cube.png) | ![illustration for Cube](../../fontawesome-6/Solid/Cube.Local.png) |




## Cube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cube
include('fontawesome-6/Solid/Cube')

' renders the element
Cube('Cube', 'Cube', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cube
include('fontawesome-6/Solid/Cube')

' renders the element
Cube('Cube', 'Cube', 'an optional tech label', 'an optional description')
@enduml
```

