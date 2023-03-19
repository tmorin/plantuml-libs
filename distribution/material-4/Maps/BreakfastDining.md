# BreakfastDining


```text
material-4/Maps/BreakfastDining
```

```text
include('material-4/Maps/BreakfastDining')
```



| Illustration | BreakfastDining |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/BreakfastDining.png) | ![illustration for BreakfastDining](../../material-4/Maps/BreakfastDining.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BreakfastDiningXs>`
- `<$BreakfastDiningSm>`
- `<$BreakfastDiningMd>`
- `<$BreakfastDiningLg>`





## BreakfastDining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BreakfastDining
include('material-4/Maps/BreakfastDining')

' renders the element
BreakfastDining('BreakfastDining', 'Breakfast Dining', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element BreakfastDining
include('material-4/Maps/BreakfastDining')

' renders the element
BreakfastDining('BreakfastDining', 'Breakfast Dining', 'an optional tech label', 'an optional description')
@enduml
```

