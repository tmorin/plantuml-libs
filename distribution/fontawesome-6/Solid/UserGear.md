# UserGear


```text
fontawesome-6/Solid/UserGear
```

```text
include('fontawesome-6/Solid/UserGear')
```



| Illustration | UserGear |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserGear.png) | ![illustration for UserGear](../../fontawesome-6/Solid/UserGear.Local.png) |




## UserGear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserGear
include('fontawesome-6/Solid/UserGear')

' renders the element
UserGear('UserGear', 'User Gear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserGear
include('fontawesome-6/Solid/UserGear')

' renders the element
UserGear('UserGear', 'User Gear', 'an optional tech label', 'an optional description')
@enduml
```

