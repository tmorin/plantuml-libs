# FilterBAndW


```text
material-4/Image/FilterBAndW
```

```text
include('material-4/Image/FilterBAndW')
```



| Illustration | FilterBAndW |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FilterBAndW.png) | ![illustration for FilterBAndW](../../material-4/Image/FilterBAndW.Local.png) |




## FilterBAndW

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FilterBAndW
include('material-4/Image/FilterBAndW')

' renders the element
FilterBAndW('FilterBAndW', 'Filter B And W', 'an optional tech label')
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

' loads the Item which embeds the element FilterBAndW
include('material-4/Image/FilterBAndW')

' renders the element
FilterBAndW('FilterBAndW', 'Filter B And W', 'an optional tech label')
@enduml
```

