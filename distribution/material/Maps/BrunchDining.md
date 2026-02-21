# BrunchDining


```text
material/Maps/BrunchDining
```

```text
include('material/Maps/BrunchDining')
```



| Illustration | BrunchDining |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/BrunchDining.png) | ![illustration for BrunchDining](../../material/Maps/BrunchDining.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrunchDiningXs>`
- `<$BrunchDiningSm>`
- `<$BrunchDiningMd>`
- `<$BrunchDiningLg>`





## BrunchDining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BrunchDining
include('material/Maps/BrunchDining')

' renders the element
BrunchDining('BrunchDining', 'Brunch Dining', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BrunchDining
include('material/Maps/BrunchDining')

' renders the element
BrunchDining('BrunchDining', 'Brunch Dining', 'an optional tech label', 'an optional description')
@enduml
```

