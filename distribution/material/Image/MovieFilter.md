# MovieFilter


```text
material/Image/MovieFilter
```

```text
include('material/Image/MovieFilter')
```



| Illustration | MovieFilter |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/MovieFilter.png) | ![illustration for MovieFilter](../../material/Image/MovieFilter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MovieFilterXs>`
- `<$MovieFilterSm>`
- `<$MovieFilterMd>`
- `<$MovieFilterLg>`





## MovieFilter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MovieFilter
include('material/Image/MovieFilter')

' renders the element
MovieFilter('MovieFilter', 'Movie Filter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MovieFilter
include('material/Image/MovieFilter')

' renders the element
MovieFilter('MovieFilter', 'Movie Filter', 'an optional tech label', 'an optional description')
@enduml
```

