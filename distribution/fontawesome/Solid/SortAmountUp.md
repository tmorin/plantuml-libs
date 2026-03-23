# SortAmountUp


```text
fontawesome/Solid/SortAmountUp
```

```text
include('fontawesome/Solid/SortAmountUp')
```



| Illustration | SortAmountUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortAmountUp.png) | ![illustration for SortAmountUp](../../fontawesome/Solid/SortAmountUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortAmountUpXs>`
- `<$SortAmountUpSm>`
- `<$SortAmountUpMd>`
- `<$SortAmountUpLg>`





## SortAmountUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortAmountUp
include('fontawesome/Solid/SortAmountUp')

' renders the element
SortAmountUp('SortAmountUp', 'Sort Amount Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SortAmountUp
include('fontawesome/Solid/SortAmountUp')

' renders the element
SortAmountUp('SortAmountUp', 'Sort Amount Up', 'an optional tech label', 'an optional description')
@enduml
```

