# FilterHdr


```text
material-4/Image/FilterHdr
```

```text
include('material-4/Image/FilterHdr')
```



| Illustration | FilterHdr |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FilterHdr.png) | ![illustration for FilterHdr](../../material-4/Image/FilterHdr.Local.png) |




## FilterHdr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FilterHdr
include('material-4/Image/FilterHdr')

' renders the element
FilterHdr('FilterHdr', 'Filter Hdr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilterHdr
include('material-4/Image/FilterHdr')

' renders the element
FilterHdr('FilterHdr', 'Filter Hdr', 'an optional tech label', 'an optional description')
@enduml
```

