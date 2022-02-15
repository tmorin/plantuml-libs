# ReplyAll


```text
fontawesome-6/Solid/ReplyAll
```

```text
include('fontawesome-6/Solid/ReplyAll')
```



| Illustration | ReplyAll |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ReplyAll.png) | ![illustration for ReplyAll](../../fontawesome-6/Solid/ReplyAll.Local.png) |




## ReplyAll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ReplyAll
include('fontawesome-6/Solid/ReplyAll')

' renders the element
ReplyAll('ReplyAll', 'Reply All', 'an optional tech label')
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

' loads the Item which embeds the element ReplyAll
include('fontawesome-6/Solid/ReplyAll')

' renders the element
ReplyAll('ReplyAll', 'Reply All', 'an optional tech label')
@enduml
```

