# TabUnselected


```text
material-4/Action/TabUnselected
```

```text
include('material-4/Action/TabUnselected')
```



| Illustration | TabUnselected |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/TabUnselected.png) | ![illustration for TabUnselected](../../material-4/Action/TabUnselected.Local.png) |




## TabUnselected

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TabUnselected
include('material-4/Action/TabUnselected')

' renders the element
TabUnselected('TabUnselected', 'Tab Unselected', 'an optional tech label')
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

' loads the Item which embeds the element TabUnselected
include('material-4/Action/TabUnselected')

' renders the element
TabUnselected('TabUnselected', 'Tab Unselected', 'an optional tech label')
@enduml
```

