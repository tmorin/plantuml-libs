# UserGroup


```text
fontawesome-6/Solid/UserGroup
```

```text
include('fontawesome-6/Solid/UserGroup')
```



| Illustration | UserGroup |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserGroup.png) | ![illustration for UserGroup](../../fontawesome-6/Solid/UserGroup.Local.png) |




## UserGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserGroup
include('fontawesome-6/Solid/UserGroup')

' renders the element
UserGroup('UserGroup', 'User Group', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserGroup
include('fontawesome-6/Solid/UserGroup')

' renders the element
UserGroup('UserGroup', 'User Group', 'an optional tech label', 'an optional description')
@enduml
```

