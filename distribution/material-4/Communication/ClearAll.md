# ClearAll


```text
material-4/Communication/ClearAll
```

```text
include('material-4/Communication/ClearAll')
```



| Illustration | ClearAll |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/ClearAll.png) | ![illustration for ClearAll](../../material-4/Communication/ClearAll.Local.png) |




## ClearAll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ClearAll
include('material-4/Communication/ClearAll')

' renders the element
ClearAll('ClearAll', 'Clear All', 'an optional tech label')
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

' loads the Item which embeds the element ClearAll
include('material-4/Communication/ClearAll')

' renders the element
ClearAll('ClearAll', 'Clear All', 'an optional tech label')
@enduml
```

