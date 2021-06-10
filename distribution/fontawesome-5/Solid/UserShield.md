# UserShield


```text
fontawesome-5/Solid/UserShield
```

```text
include('fontawesome-5/Solid/UserShield')
```



| Illustration | UserShield |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserShield.png) | ![illustration for UserShield](../../fontawesome-5/Solid/UserShield.Local.png) |




## UserShield

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserShield
include('fontawesome-5/Solid/UserShield')

' renders the element
UserShield('UserShield', 'User Shield', 'an optional tech label')
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

' loads the Item which embeds the element UserShield
include('fontawesome-5/Solid/UserShield')

' renders the element
UserShield('UserShield', 'User Shield', 'an optional tech label')
@enduml
```

