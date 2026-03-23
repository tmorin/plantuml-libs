# SortAlphaAsc


```text
fontawesome/Solid/SortAlphaAsc
```

```text
include('fontawesome/Solid/SortAlphaAsc')
```



| Illustration | SortAlphaAsc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortAlphaAsc.png) | ![illustration for SortAlphaAsc](../../fontawesome/Solid/SortAlphaAsc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortAlphaAscXs>`
- `<$SortAlphaAscSm>`
- `<$SortAlphaAscMd>`
- `<$SortAlphaAscLg>`





## SortAlphaAsc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortAlphaAsc
include('fontawesome/Solid/SortAlphaAsc')

' renders the element
SortAlphaAsc('SortAlphaAsc', 'Sort Alpha Asc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SortAlphaAsc
include('fontawesome/Solid/SortAlphaAsc')

' renders the element
SortAlphaAsc('SortAlphaAsc', 'Sort Alpha Asc', 'an optional tech label', 'an optional description')
@enduml
```

