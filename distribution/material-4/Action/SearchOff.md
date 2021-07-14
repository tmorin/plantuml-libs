# SearchOff


```text
material-4/Action/SearchOff
```

```text
include('material-4/Action/SearchOff')
```



| Illustration | SearchOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SearchOff.png) | ![illustration for SearchOff](../../material-4/Action/SearchOff.Local.png) |




## SearchOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SearchOff
include('material-4/Action/SearchOff')

' renders the element
SearchOff('SearchOff', 'Search Off', 'an optional tech label')
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

' loads the Item which embeds the element SearchOff
include('material-4/Action/SearchOff')

' renders the element
SearchOff('SearchOff', 'Search Off', 'an optional tech label')
@enduml
```

