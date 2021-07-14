# NotStarted


```text
material-4/Action/NotStarted
```

```text
include('material-4/Action/NotStarted')
```



| Illustration | NotStarted |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/NotStarted.png) | ![illustration for NotStarted](../../material-4/Action/NotStarted.Local.png) |




## NotStarted

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NotStarted
include('material-4/Action/NotStarted')

' renders the element
NotStarted('NotStarted', 'Not Started', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element NotStarted
include('material-4/Action/NotStarted')

' renders the element
NotStarted('NotStarted', 'Not Started', 'an optional tech label')
@enduml
```

