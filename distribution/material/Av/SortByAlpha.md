# SortByAlpha


```text
material/Av/SortByAlpha
```

```text
include('material/Av/SortByAlpha')
```



| Illustration | SortByAlpha |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/SortByAlpha.png) | ![illustration for SortByAlpha](../../material/Av/SortByAlpha.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element SortByAlpha
include('material/Av/SortByAlpha')

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
include('material/bootstrap')

' loads the Item which embeds the element SortByAlpha
include('material/Av/SortByAlpha')

' renders the element
SortByAlpha('SortByAlpha', 'Sort By Alpha', 'an optional tech label', 'an optional description')
@enduml
```

