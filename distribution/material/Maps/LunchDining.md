# LunchDining


```text
material/Maps/LunchDining
```

```text
include('material/Maps/LunchDining')
```



| Illustration | LunchDining |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LunchDining.png) | ![illustration for LunchDining](../../material/Maps/LunchDining.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LunchDiningXs>`
- `<$LunchDiningSm>`
- `<$LunchDiningMd>`
- `<$LunchDiningLg>`





## LunchDining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LunchDining
include('material/Maps/LunchDining')

' renders the element
LunchDining('LunchDining', 'Lunch Dining', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LunchDining
include('material/Maps/LunchDining')

' renders the element
LunchDining('LunchDining', 'Lunch Dining', 'an optional tech label', 'an optional description')
@enduml
```

