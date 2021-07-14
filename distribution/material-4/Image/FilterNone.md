# FilterNone


```text
material-4/Image/FilterNone
```

```text
include('material-4/Image/FilterNone')
```



| Illustration | FilterNone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FilterNone.png) | ![illustration for FilterNone](../../material-4/Image/FilterNone.Local.png) |




## FilterNone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FilterNone
include('material-4/Image/FilterNone')

' renders the element
FilterNone('FilterNone', 'Filter None', 'an optional tech label')
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

' loads the Item which embeds the element FilterNone
include('material-4/Image/FilterNone')

' renders the element
FilterNone('FilterNone', 'Filter None', 'an optional tech label')
@enduml
```

