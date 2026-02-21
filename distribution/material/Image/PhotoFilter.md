# PhotoFilter


```text
material/Image/PhotoFilter
```

```text
include('material/Image/PhotoFilter')
```



| Illustration | PhotoFilter |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/PhotoFilter.png) | ![illustration for PhotoFilter](../../material/Image/PhotoFilter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhotoFilterXs>`
- `<$PhotoFilterSm>`
- `<$PhotoFilterMd>`
- `<$PhotoFilterLg>`





## PhotoFilter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhotoFilter
include('material/Image/PhotoFilter')

' renders the element
PhotoFilter('PhotoFilter', 'Photo Filter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhotoFilter
include('material/Image/PhotoFilter')

' renders the element
PhotoFilter('PhotoFilter', 'Photo Filter', 'an optional tech label', 'an optional description')
@enduml
```

