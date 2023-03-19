# BakeryDining


```text
material-4/Maps/BakeryDining
```

```text
include('material-4/Maps/BakeryDining')
```



| Illustration | BakeryDining |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/BakeryDining.png) | ![illustration for BakeryDining](../../material-4/Maps/BakeryDining.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BakeryDiningXs>`
- `<$BakeryDiningSm>`
- `<$BakeryDiningMd>`
- `<$BakeryDiningLg>`





## BakeryDining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BakeryDining
include('material-4/Maps/BakeryDining')

' renders the element
BakeryDining('BakeryDining', 'Bakery Dining', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BakeryDining
include('material-4/Maps/BakeryDining')

' renders the element
BakeryDining('BakeryDining', 'Bakery Dining', 'an optional tech label', 'an optional description')
@enduml
```

