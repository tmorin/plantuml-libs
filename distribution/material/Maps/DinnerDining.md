# DinnerDining


```text
material/Maps/DinnerDining
```

```text
include('material/Maps/DinnerDining')
```



| Illustration | DinnerDining |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/DinnerDining.png) | ![illustration for DinnerDining](../../material/Maps/DinnerDining.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DinnerDiningXs>`
- `<$DinnerDiningSm>`
- `<$DinnerDiningMd>`
- `<$DinnerDiningLg>`





## DinnerDining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DinnerDining
include('material/Maps/DinnerDining')

' renders the element
DinnerDining('DinnerDining', 'Dinner Dining', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element DinnerDining
include('material/Maps/DinnerDining')

' renders the element
DinnerDining('DinnerDining', 'Dinner Dining', 'an optional tech label', 'an optional description')
@enduml
```

