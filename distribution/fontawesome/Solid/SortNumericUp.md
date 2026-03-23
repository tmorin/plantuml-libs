# SortNumericUp


```text
fontawesome/Solid/SortNumericUp
```

```text
include('fontawesome/Solid/SortNumericUp')
```



| Illustration | SortNumericUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortNumericUp.png) | ![illustration for SortNumericUp](../../fontawesome/Solid/SortNumericUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortNumericUpXs>`
- `<$SortNumericUpSm>`
- `<$SortNumericUpMd>`
- `<$SortNumericUpLg>`





## SortNumericUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortNumericUp
include('fontawesome/Solid/SortNumericUp')

' renders the element
SortNumericUp('SortNumericUp', 'Sort Numeric Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SortNumericUp
include('fontawesome/Solid/SortNumericUp')

' renders the element
SortNumericUp('SortNumericUp', 'Sort Numeric Up', 'an optional tech label', 'an optional description')
@enduml
```

