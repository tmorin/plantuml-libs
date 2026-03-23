# SortNumericDesc


```text
fontawesome/Solid/SortNumericDesc
```

```text
include('fontawesome/Solid/SortNumericDesc')
```



| Illustration | SortNumericDesc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortNumericDesc.png) | ![illustration for SortNumericDesc](../../fontawesome/Solid/SortNumericDesc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortNumericDescXs>`
- `<$SortNumericDescSm>`
- `<$SortNumericDescMd>`
- `<$SortNumericDescLg>`





## SortNumericDesc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortNumericDesc
include('fontawesome/Solid/SortNumericDesc')

' renders the element
SortNumericDesc('SortNumericDesc', 'Sort Numeric Desc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SortNumericDesc
include('fontawesome/Solid/SortNumericDesc')

' renders the element
SortNumericDesc('SortNumericDesc', 'Sort Numeric Desc', 'an optional tech label', 'an optional description')
@enduml
```

