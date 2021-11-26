# Bug


```text
fontawesome-5/Solid/Bug
```

```text
include('fontawesome-5/Solid/Bug')
```



| Illustration | Bug |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bug.png) | ![illustration for Bug](../../fontawesome-5/Solid/Bug.Local.png) |




## Bug

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bug
include('fontawesome-5/Solid/Bug')

' renders the element
Bug('Bug', 'Bug', 'an optional tech label')
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

' loads the Item which embeds the element Bug
include('fontawesome-5/Solid/Bug')

' renders the element
Bug('Bug', 'Bug', 'an optional tech label')
@enduml
```

