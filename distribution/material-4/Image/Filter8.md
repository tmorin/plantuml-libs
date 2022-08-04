# Filter8


```text
material-4/Image/Filter8
```

```text
include('material-4/Image/Filter8')
```



| Illustration | Filter8 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Filter8.png) | ![illustration for Filter8](../../material-4/Image/Filter8.Local.png) |




## Filter8

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Filter8
include('material-4/Image/Filter8')

' renders the element
Filter8('Filter8', 'Filter8', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Filter8
include('material-4/Image/Filter8')

' renders the element
Filter8('Filter8', 'Filter8', 'an optional tech label', 'an optional description')
@enduml
```

