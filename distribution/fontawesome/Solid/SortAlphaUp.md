# SortAlphaUp


```text
fontawesome/Solid/SortAlphaUp
```

```text
include('fontawesome/Solid/SortAlphaUp')
```



| Illustration | SortAlphaUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortAlphaUp.png) | ![illustration for SortAlphaUp](../../fontawesome/Solid/SortAlphaUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortAlphaUpXs>`
- `<$SortAlphaUpSm>`
- `<$SortAlphaUpMd>`
- `<$SortAlphaUpLg>`





## SortAlphaUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortAlphaUp
include('fontawesome/Solid/SortAlphaUp')

' renders the element
SortAlphaUp('SortAlphaUp', 'Sort Alpha Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SortAlphaUp
include('fontawesome/Solid/SortAlphaUp')

' renders the element
SortAlphaUp('SortAlphaUp', 'Sort Alpha Up', 'an optional tech label', 'an optional description')
@enduml
```

