# FilterDrama


```text
material-4/Image/FilterDrama
```

```text
include('material-4/Image/FilterDrama')
```



| Illustration | FilterDrama |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FilterDrama.png) | ![illustration for FilterDrama](../../material-4/Image/FilterDrama.Local.png) |




## FilterDrama

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FilterDrama
include('material-4/Image/FilterDrama')

' renders the element
FilterDrama('FilterDrama', 'Filter Drama', 'an optional tech label')
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

' loads the Item which embeds the element FilterDrama
include('material-4/Image/FilterDrama')

' renders the element
FilterDrama('FilterDrama', 'Filter Drama', 'an optional tech label')
@enduml
```

