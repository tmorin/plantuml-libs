# Liquor


```text
material-4/Maps/Liquor
```

```text
include('material-4/Maps/Liquor')
```



| Illustration | Liquor |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Liquor.png) | ![illustration for Liquor](../../material-4/Maps/Liquor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LiquorXs>`
- `<$LiquorSm>`
- `<$LiquorMd>`
- `<$LiquorLg>`





## Liquor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Liquor
include('material-4/Maps/Liquor')

' renders the element
Liquor('Liquor', 'Liquor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Liquor
include('material-4/Maps/Liquor')

' renders the element
Liquor('Liquor', 'Liquor', 'an optional tech label', 'an optional description')
@enduml
```

