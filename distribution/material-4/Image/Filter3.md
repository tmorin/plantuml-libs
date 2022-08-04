# Filter3


```text
material-4/Image/Filter3
```

```text
include('material-4/Image/Filter3')
```



| Illustration | Filter3 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Filter3.png) | ![illustration for Filter3](../../material-4/Image/Filter3.Local.png) |




## Filter3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Filter3
include('material-4/Image/Filter3')

' renders the element
Filter3('Filter3', 'Filter3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Filter3
include('material-4/Image/Filter3')

' renders the element
Filter3('Filter3', 'Filter3', 'an optional tech label', 'an optional description')
@enduml
```

