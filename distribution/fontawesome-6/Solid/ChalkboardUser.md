# ChalkboardUser


```text
fontawesome-6/Solid/ChalkboardUser
```

```text
include('fontawesome-6/Solid/ChalkboardUser')
```



| Illustration | ChalkboardUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChalkboardUser.png) | ![illustration for ChalkboardUser](../../fontawesome-6/Solid/ChalkboardUser.Local.png) |




## ChalkboardUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChalkboardUser
include('fontawesome-6/Solid/ChalkboardUser')

' renders the element
ChalkboardUser('ChalkboardUser', 'Chalkboard User', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChalkboardUser
include('fontawesome-6/Solid/ChalkboardUser')

' renders the element
ChalkboardUser('ChalkboardUser', 'Chalkboard User', 'an optional tech label', 'an optional description')
@enduml
```

