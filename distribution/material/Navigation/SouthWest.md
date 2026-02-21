# SouthWest


```text
material/Navigation/SouthWest
```

```text
include('material/Navigation/SouthWest')
```



| Illustration | SouthWest |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/SouthWest.png) | ![illustration for SouthWest](../../material/Navigation/SouthWest.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SouthWestXs>`
- `<$SouthWestSm>`
- `<$SouthWestMd>`
- `<$SouthWestLg>`





## SouthWest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SouthWest
include('material/Navigation/SouthWest')

' renders the element
SouthWest('SouthWest', 'South West', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SouthWest
include('material/Navigation/SouthWest')

' renders the element
SouthWest('SouthWest', 'South West', 'an optional tech label', 'an optional description')
@enduml
```

