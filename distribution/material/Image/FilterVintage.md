# FilterVintage


```text
material/Image/FilterVintage
```

```text
include('material/Image/FilterVintage')
```



| Illustration | FilterVintage |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/FilterVintage.png) | ![illustration for FilterVintage](../../material/Image/FilterVintage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilterVintageXs>`
- `<$FilterVintageSm>`
- `<$FilterVintageMd>`
- `<$FilterVintageLg>`





## FilterVintage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FilterVintage
include('material/Image/FilterVintage')

' renders the element
FilterVintage('FilterVintage', 'Filter Vintage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilterVintage
include('material/Image/FilterVintage')

' renders the element
FilterVintage('FilterVintage', 'Filter Vintage', 'an optional tech label', 'an optional description')
@enduml
```

