# LooksOne


```text
material-4/Image/LooksOne
```

```text
include('material-4/Image/LooksOne')
```



| Illustration | LooksOne |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/LooksOne.png) | ![illustration for LooksOne](../../material-4/Image/LooksOne.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LooksOneXs>`
- `<$LooksOneSm>`
- `<$LooksOneMd>`
- `<$LooksOneLg>`





## LooksOne

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LooksOne
include('material-4/Image/LooksOne')

' renders the element
LooksOne('LooksOne', 'Looks One', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LooksOne
include('material-4/Image/LooksOne')

' renders the element
LooksOne('LooksOne', 'Looks One', 'an optional tech label', 'an optional description')
@enduml
```

