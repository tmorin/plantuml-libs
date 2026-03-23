# SortAmountDesc


```text
fontawesome/Solid/SortAmountDesc
```

```text
include('fontawesome/Solid/SortAmountDesc')
```



| Illustration | SortAmountDesc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortAmountDesc.png) | ![illustration for SortAmountDesc](../../fontawesome/Solid/SortAmountDesc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortAmountDescXs>`
- `<$SortAmountDescSm>`
- `<$SortAmountDescMd>`
- `<$SortAmountDescLg>`





## SortAmountDesc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortAmountDesc
include('fontawesome/Solid/SortAmountDesc')

' renders the element
SortAmountDesc('SortAmountDesc', 'Sort Amount Desc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SortAmountDesc
include('fontawesome/Solid/SortAmountDesc')

' renders the element
SortAmountDesc('SortAmountDesc', 'Sort Amount Desc', 'an optional tech label', 'an optional description')
@enduml
```

