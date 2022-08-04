# Helicopter


```text
fontawesome-6/Solid/Helicopter
```

```text
include('fontawesome-6/Solid/Helicopter')
```



| Illustration | Helicopter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Helicopter.png) | ![illustration for Helicopter](../../fontawesome-6/Solid/Helicopter.Local.png) |




## Helicopter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Helicopter
include('fontawesome-6/Solid/Helicopter')

' renders the element
Helicopter('Helicopter', 'Helicopter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Helicopter
include('fontawesome-6/Solid/Helicopter')

' renders the element
Helicopter('Helicopter', 'Helicopter', 'an optional tech label', 'an optional description')
@enduml
```

