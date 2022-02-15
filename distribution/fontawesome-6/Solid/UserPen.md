# UserPen


```text
fontawesome-6/Solid/UserPen
```

```text
include('fontawesome-6/Solid/UserPen')
```



| Illustration | UserPen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserPen.png) | ![illustration for UserPen](../../fontawesome-6/Solid/UserPen.Local.png) |




## UserPen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserPen
include('fontawesome-6/Solid/UserPen')

' renders the element
UserPen('UserPen', 'User Pen', 'an optional tech label')
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

' loads the Item which embeds the element UserPen
include('fontawesome-6/Solid/UserPen')

' renders the element
UserPen('UserPen', 'User Pen', 'an optional tech label')
@enduml
```

