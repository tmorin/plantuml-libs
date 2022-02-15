# UserCheck


```text
fontawesome-6/Solid/UserCheck
```

```text
include('fontawesome-6/Solid/UserCheck')
```



| Illustration | UserCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserCheck.png) | ![illustration for UserCheck](../../fontawesome-6/Solid/UserCheck.Local.png) |




## UserCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserCheck
include('fontawesome-6/Solid/UserCheck')

' renders the element
UserCheck('UserCheck', 'User Check', 'an optional tech label')
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

' loads the Item which embeds the element UserCheck
include('fontawesome-6/Solid/UserCheck')

' renders the element
UserCheck('UserCheck', 'User Check', 'an optional tech label')
@enduml
```

