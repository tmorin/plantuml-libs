# UsersViewfinder


```text
fontawesome-6/Solid/UsersViewfinder
```

```text
include('fontawesome-6/Solid/UsersViewfinder')
```



| Illustration | UsersViewfinder |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UsersViewfinder.png) | ![illustration for UsersViewfinder](../../fontawesome-6/Solid/UsersViewfinder.Local.png) |




## UsersViewfinder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UsersViewfinder
include('fontawesome-6/Solid/UsersViewfinder')

' renders the element
UsersViewfinder('UsersViewfinder', 'Users Viewfinder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UsersViewfinder
include('fontawesome-6/Solid/UsersViewfinder')

' renders the element
UsersViewfinder('UsersViewfinder', 'Users Viewfinder', 'an optional tech label', 'an optional description')
@enduml
```

