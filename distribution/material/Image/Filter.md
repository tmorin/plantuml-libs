# Filter


```text
material/Image/Filter
```

```text
include('material/Image/Filter')
```



| Illustration | Filter |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Filter.png) | ![illustration for Filter](../../material/Image/Filter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilterXs>`
- `<$FilterSm>`
- `<$FilterMd>`
- `<$FilterLg>`





## Filter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Filter
include('material/Image/Filter')

' renders the element
Filter('Filter', 'Filter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Filter
include('material/Image/Filter')

' renders the element
Filter('Filter', 'Filter', 'an optional tech label', 'an optional description')
@enduml
```

