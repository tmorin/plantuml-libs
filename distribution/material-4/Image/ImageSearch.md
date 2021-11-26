# ImageSearch


```text
material-4/Image/ImageSearch
```

```text
include('material-4/Image/ImageSearch')
```



| Illustration | ImageSearch |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ImageSearch.png) | ![illustration for ImageSearch](../../material-4/Image/ImageSearch.Local.png) |




## ImageSearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ImageSearch
include('material-4/Image/ImageSearch')

' renders the element
ImageSearch('ImageSearch', 'Image Search', 'an optional tech label')
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

' loads the Item which embeds the element ImageSearch
include('material-4/Image/ImageSearch')

' renders the element
ImageSearch('ImageSearch', 'Image Search', 'an optional tech label')
@enduml
```

