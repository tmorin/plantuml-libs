# FilterVintage


```text
material-4/Image/FilterVintage
```

```text
include('material-4/Image/FilterVintage')
```



| Illustration | FilterVintage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FilterVintage.png) | ![illustration for FilterVintage](../../material-4/Image/FilterVintage.Local.png) |




## FilterVintage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FilterVintage
include('material-4/Image/FilterVintage')

' renders the element
FilterVintage('FilterVintage', 'Filter Vintage', 'an optional tech label')
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

' loads the Item which embeds the element FilterVintage
include('material-4/Image/FilterVintage')

' renders the element
FilterVintage('FilterVintage', 'Filter Vintage', 'an optional tech label')
@enduml
```

