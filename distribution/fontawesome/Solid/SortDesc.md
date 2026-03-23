# SortDesc


```text
fontawesome/Solid/SortDesc
```

```text
include('fontawesome/Solid/SortDesc')
```



| Illustration | SortDesc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortDesc.png) | ![illustration for SortDesc](../../fontawesome/Solid/SortDesc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortDescXs>`
- `<$SortDescSm>`
- `<$SortDescMd>`
- `<$SortDescLg>`





## SortDesc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortDesc
include('fontawesome/Solid/SortDesc')

' renders the element
SortDesc('SortDesc', 'Sort Desc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SortDesc
include('fontawesome/Solid/SortDesc')

' renders the element
SortDesc('SortDesc', 'Sort Desc', 'an optional tech label', 'an optional description')
@enduml
```

