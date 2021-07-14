# History


```text
material-4/Action/History
```

```text
include('material-4/Action/History')
```



| Illustration | History |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/History.png) | ![illustration for History](../../material-4/Action/History.Local.png) |




## History

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element History
include('material-4/Action/History')

' renders the element
History('History', 'History', 'an optional tech label')
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

' loads the Item which embeds the element History
include('material-4/Action/History')

' renders the element
History('History', 'History', 'an optional tech label')
@enduml
```

