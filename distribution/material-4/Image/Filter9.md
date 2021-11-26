# Filter9


```text
material-4/Image/Filter9
```

```text
include('material-4/Image/Filter9')
```



| Illustration | Filter9 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Filter9.png) | ![illustration for Filter9](../../material-4/Image/Filter9.Local.png) |




## Filter9

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Filter9
include('material-4/Image/Filter9')

' renders the element
Filter9('Filter9', 'Filter9', 'an optional tech label')
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

' loads the Item which embeds the element Filter9
include('material-4/Image/Filter9')

' renders the element
Filter9('Filter9', 'Filter9', 'an optional tech label')
@enduml
```

