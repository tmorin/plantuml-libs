# Filter7


```text
material-4/Image/Filter7
```

```text
include('material-4/Image/Filter7')
```



| Illustration | Filter7 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Filter7.png) | ![illustration for Filter7](../../material-4/Image/Filter7.Local.png) |




## Filter7

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Filter7
include('material-4/Image/Filter7')

' renders the element
Filter7('Filter7', 'Filter7', 'an optional tech label')
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

' loads the Item which embeds the element Filter7
include('material-4/Image/Filter7')

' renders the element
Filter7('Filter7', 'Filter7', 'an optional tech label')
@enduml
```

