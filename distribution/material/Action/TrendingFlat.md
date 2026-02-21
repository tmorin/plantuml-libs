# TrendingFlat


```text
material/Action/TrendingFlat
```

```text
include('material/Action/TrendingFlat')
```



| Illustration | TrendingFlat |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/TrendingFlat.png) | ![illustration for TrendingFlat](../../material/Action/TrendingFlat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrendingFlatXs>`
- `<$TrendingFlatSm>`
- `<$TrendingFlatMd>`
- `<$TrendingFlatLg>`





## TrendingFlat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TrendingFlat
include('material/Action/TrendingFlat')

' renders the element
TrendingFlat('TrendingFlat', 'Trending Flat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TrendingFlat
include('material/Action/TrendingFlat')

' renders the element
TrendingFlat('TrendingFlat', 'Trending Flat', 'an optional tech label', 'an optional description')
@enduml
```

