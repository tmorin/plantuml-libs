# FilterBAndW


```text
material/Image/FilterBAndW
```

```text
include('material/Image/FilterBAndW')
```



| Illustration | FilterBAndW |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/FilterBAndW.png) | ![illustration for FilterBAndW](../../material/Image/FilterBAndW.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilterBAndWXs>`
- `<$FilterBAndWSm>`
- `<$FilterBAndWMd>`
- `<$FilterBAndWLg>`





## FilterBAndW

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FilterBAndW
include('material/Image/FilterBAndW')

' renders the element
FilterBAndW('FilterBAndW', 'Filter B And W', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element FilterBAndW
include('material/Image/FilterBAndW')

' renders the element
FilterBAndW('FilterBAndW', 'Filter B And W', 'an optional tech label', 'an optional description')
@enduml
```

