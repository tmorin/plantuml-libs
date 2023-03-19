# SortByAlpha


```text
material-4/Av/SortByAlpha
```

```text
include('material-4/Av/SortByAlpha')
```



| Illustration | SortByAlpha |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/SortByAlpha.png) | ![illustration for SortByAlpha](../../material-4/Av/SortByAlpha.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortByAlphaXs>`
- `<$SortByAlphaSm>`
- `<$SortByAlphaMd>`
- `<$SortByAlphaLg>`





## SortByAlpha

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SortByAlpha
include('material-4/Av/SortByAlpha')

' renders the element
SortByAlpha('SortByAlpha', 'Sort By Alpha', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SortByAlpha
include('material-4/Av/SortByAlpha')

' renders the element
SortByAlpha('SortByAlpha', 'Sort By Alpha', 'an optional tech label', 'an optional description')
@enduml
```

