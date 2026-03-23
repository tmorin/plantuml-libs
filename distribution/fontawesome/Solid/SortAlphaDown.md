# SortAlphaDown


```text
fontawesome/Solid/SortAlphaDown
```

```text
include('fontawesome/Solid/SortAlphaDown')
```



| Illustration | SortAlphaDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortAlphaDown.png) | ![illustration for SortAlphaDown](../../fontawesome/Solid/SortAlphaDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortAlphaDownXs>`
- `<$SortAlphaDownSm>`
- `<$SortAlphaDownMd>`
- `<$SortAlphaDownLg>`





## SortAlphaDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortAlphaDown
include('fontawesome/Solid/SortAlphaDown')

' renders the element
SortAlphaDown('SortAlphaDown', 'Sort Alpha Down', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortAlphaDown
include('fontawesome/Solid/SortAlphaDown')

' renders the element
SortAlphaDown('SortAlphaDown', 'Sort Alpha Down', 'an optional tech label', 'an optional description')
@enduml
```

