# Helicopter


```text
fontawesome-5/Solid/Helicopter
```

```text
include('fontawesome-5/Solid/Helicopter')
```



| Illustration | Helicopter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Helicopter.png) | ![illustration for Helicopter](../../fontawesome-5/Solid/Helicopter.Local.png) |




## Helicopter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Helicopter
include('fontawesome-5/Solid/Helicopter')

' renders the element
Helicopter('Helicopter', 'Helicopter', 'an optional tech label')
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

' loads the Item which embeds the element Helicopter
include('fontawesome-5/Solid/Helicopter')

' renders the element
Helicopter('Helicopter', 'Helicopter', 'an optional tech label')
@enduml
```

