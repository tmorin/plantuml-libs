# TrendingFlat


```text
material-4/Action/TrendingFlat
```

```text
include('material-4/Action/TrendingFlat')
```



| Illustration | TrendingFlat |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/TrendingFlat.png) | ![illustration for TrendingFlat](../../material-4/Action/TrendingFlat.Local.png) |




## TrendingFlat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TrendingFlat
include('material-4/Action/TrendingFlat')

' renders the element
TrendingFlat('TrendingFlat', 'Trending Flat', 'an optional tech label')
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

' loads the Item which embeds the element TrendingFlat
include('material-4/Action/TrendingFlat')

' renders the element
TrendingFlat('TrendingFlat', 'Trending Flat', 'an optional tech label')
@enduml
```

