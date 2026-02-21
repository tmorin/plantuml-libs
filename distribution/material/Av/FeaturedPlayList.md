# FeaturedPlayList


```text
material/Av/FeaturedPlayList
```

```text
include('material/Av/FeaturedPlayList')
```



| Illustration | FeaturedPlayList |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/FeaturedPlayList.png) | ![illustration for FeaturedPlayList](../../material/Av/FeaturedPlayList.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FeaturedPlayListXs>`
- `<$FeaturedPlayListSm>`
- `<$FeaturedPlayListMd>`
- `<$FeaturedPlayListLg>`





## FeaturedPlayList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FeaturedPlayList
include('material/Av/FeaturedPlayList')

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
include('material/bootstrap')

' loads the Item which embeds the element FeaturedPlayList
include('material/Av/FeaturedPlayList')

' renders the element
FeaturedPlayList('FeaturedPlayList', 'Featured Play List', 'an optional tech label', 'an optional description')
@enduml
```

