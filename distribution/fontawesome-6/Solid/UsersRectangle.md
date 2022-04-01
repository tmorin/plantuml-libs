# UsersRectangle


```text
fontawesome-6/Solid/UsersRectangle
```

```text
include('fontawesome-6/Solid/UsersRectangle')
```



| Illustration | UsersRectangle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UsersRectangle.png) | ![illustration for UsersRectangle](../../fontawesome-6/Solid/UsersRectangle.Local.png) |




## UsersRectangle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UsersRectangle
include('fontawesome-6/Solid/UsersRectangle')

' renders the element
UsersRectangle('UsersRectangle', 'Users Rectangle', 'an optional tech label')
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

' loads the Item which embeds the element UsersRectangle
include('fontawesome-6/Solid/UsersRectangle')

' renders the element
UsersRectangle('UsersRectangle', 'Users Rectangle', 'an optional tech label')
@enduml
```

