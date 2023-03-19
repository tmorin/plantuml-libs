# SortDown


```text
fontawesome-6/Solid/SortDown
```

```text
include('fontawesome-6/Solid/SortDown')
```



| Illustration | SortDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SortDown.png) | ![illustration for SortDown](../../fontawesome-6/Solid/SortDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortDownXs>`
- `<$SortDownSm>`
- `<$SortDownMd>`
- `<$SortDownLg>`





## SortDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SortDown
include('fontawesome-6/Solid/SortDown')

' renders the element
SortDown('SortDown', 'Sort Down', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SortDown
include('fontawesome-6/Solid/SortDown')

' renders the element
SortDown('SortDown', 'Sort Down', 'an optional tech label', 'an optional description')
@enduml
```

