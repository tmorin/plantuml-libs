# SortAsc


```text
fontawesome/Solid/SortAsc
```

```text
include('fontawesome/Solid/SortAsc')
```



| Illustration | SortAsc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortAsc.png) | ![illustration for SortAsc](../../fontawesome/Solid/SortAsc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortAscXs>`
- `<$SortAscSm>`
- `<$SortAscMd>`
- `<$SortAscLg>`





## SortAsc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortAsc
include('fontawesome/Solid/SortAsc')

' renders the element
SortAsc('SortAsc', 'Sort Asc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SortAsc
include('fontawesome/Solid/SortAsc')

' renders the element
SortAsc('SortAsc', 'Sort Asc', 'an optional tech label', 'an optional description')
@enduml
```

