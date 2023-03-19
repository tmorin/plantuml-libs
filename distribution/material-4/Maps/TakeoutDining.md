# TakeoutDining


```text
material-4/Maps/TakeoutDining
```

```text
include('material-4/Maps/TakeoutDining')
```



| Illustration | TakeoutDining |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/TakeoutDining.png) | ![illustration for TakeoutDining](../../material-4/Maps/TakeoutDining.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TakeoutDiningXs>`
- `<$TakeoutDiningSm>`
- `<$TakeoutDiningMd>`
- `<$TakeoutDiningLg>`





## TakeoutDining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TakeoutDining
include('material-4/Maps/TakeoutDining')

' renders the element
TakeoutDining('TakeoutDining', 'Takeout Dining', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TakeoutDining
include('material-4/Maps/TakeoutDining')

' renders the element
TakeoutDining('TakeoutDining', 'Takeout Dining', 'an optional tech label', 'an optional description')
@enduml
```

