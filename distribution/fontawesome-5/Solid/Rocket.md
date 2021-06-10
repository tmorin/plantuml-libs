# Rocket


```text
fontawesome-5/Solid/Rocket
```

```text
include('fontawesome-5/Solid/Rocket')
```



| Illustration | Rocket |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Rocket.png) | ![illustration for Rocket](../../fontawesome-5/Solid/Rocket.Local.png) |




## Rocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Rocket
include('fontawesome-5/Solid/Rocket')

' renders the element
Rocket('Rocket', 'Rocket', 'an optional tech label')
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

' loads the Item which embeds the element Rocket
include('fontawesome-5/Solid/Rocket')

' renders the element
Rocket('Rocket', 'Rocket', 'an optional tech label')
@enduml
```

