# FeaturedPlayList


```text
material-4/Av/FeaturedPlayList
```

```text
include('material-4/Av/FeaturedPlayList')
```



| Illustration | FeaturedPlayList |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/FeaturedPlayList.png) | ![illustration for FeaturedPlayList](../../material-4/Av/FeaturedPlayList.Local.png) |




## FeaturedPlayList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FeaturedPlayList
include('material-4/Av/FeaturedPlayList')

' renders the element
FeaturedPlayList('FeaturedPlayList', 'Featured Play List', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FeaturedPlayList
include('material-4/Av/FeaturedPlayList')

' renders the element
FeaturedPlayList('FeaturedPlayList', 'Featured Play List', 'an optional tech label', 'an optional description')
@enduml
```

