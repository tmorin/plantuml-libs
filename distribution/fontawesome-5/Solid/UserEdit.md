# UserEdit


```text
fontawesome-5/Solid/UserEdit
```

```text
include('fontawesome-5/Solid/UserEdit')
```



| Illustration | UserEdit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserEdit.png) | ![illustration for UserEdit](../../fontawesome-5/Solid/UserEdit.Local.png) |




## UserEdit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserEdit
include('fontawesome-5/Solid/UserEdit')

' renders the element
UserEdit('UserEdit', 'User Edit', 'an optional tech label')
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

' loads the Item which embeds the element UserEdit
include('fontawesome-5/Solid/UserEdit')

' renders the element
UserEdit('UserEdit', 'User Edit', 'an optional tech label')
@enduml
```

