# UserTag


```text
fontawesome-6/Solid/UserTag
```

```text
include('fontawesome-6/Solid/UserTag')
```



| Illustration | UserTag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserTag.png) | ![illustration for UserTag](../../fontawesome-6/Solid/UserTag.Local.png) |




## UserTag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserTag
include('fontawesome-6/Solid/UserTag')

' renders the element
UserTag('UserTag', 'User Tag', 'an optional tech label')
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

' loads the Item which embeds the element UserTag
include('fontawesome-6/Solid/UserTag')

' renders the element
UserTag('UserTag', 'User Tag', 'an optional tech label')
@enduml
```

