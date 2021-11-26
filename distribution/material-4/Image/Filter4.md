# Filter4


```text
material-4/Image/Filter4
```

```text
include('material-4/Image/Filter4')
```



| Illustration | Filter4 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Filter4.png) | ![illustration for Filter4](../../material-4/Image/Filter4.Local.png) |




## Filter4

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Filter4
include('material-4/Image/Filter4')

' renders the element
Filter4('Filter4', 'Filter4', 'an optional tech label')
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

' loads the Item which embeds the element Filter4
include('material-4/Image/Filter4')

' renders the element
Filter4('Filter4', 'Filter4', 'an optional tech label')
@enduml
```

