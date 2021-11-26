# UserMd


```text
fontawesome-5/Solid/UserMd
```

```text
include('fontawesome-5/Solid/UserMd')
```



| Illustration | UserMd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserMd.png) | ![illustration for UserMd](../../fontawesome-5/Solid/UserMd.Local.png) |




## UserMd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserMd
include('fontawesome-5/Solid/UserMd')

' renders the element
UserMd('UserMd', 'User Md', 'an optional tech label')
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

' loads the Item which embeds the element UserMd
include('fontawesome-5/Solid/UserMd')

' renders the element
UserMd('UserMd', 'User Md', 'an optional tech label')
@enduml
```

