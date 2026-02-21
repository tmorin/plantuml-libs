# SportsBar


```text
material/Places/SportsBar
```

```text
include('material/Places/SportsBar')
```



| Illustration | SportsBar |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/SportsBar.png) | ![illustration for SportsBar](../../material/Places/SportsBar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsBarXs>`
- `<$SportsBarSm>`
- `<$SportsBarMd>`
- `<$SportsBarLg>`





## SportsBar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SportsBar
include('material/Places/SportsBar')

' renders the element
SportsBar('SportsBar', 'Sports Bar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsBar
include('material/Places/SportsBar')

' renders the element
SportsBar('SportsBar', 'Sports Bar', 'an optional tech label', 'an optional description')
@enduml
```

