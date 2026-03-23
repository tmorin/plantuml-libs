# MortarBoard


```text
fontawesome/Solid/MortarBoard
```

```text
include('fontawesome/Solid/MortarBoard')
```



| Illustration | MortarBoard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MortarBoard.png) | ![illustration for MortarBoard](../../fontawesome/Solid/MortarBoard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MortarBoardXs>`
- `<$MortarBoardSm>`
- `<$MortarBoardMd>`
- `<$MortarBoardLg>`





## MortarBoard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MortarBoard
include('fontawesome/Solid/MortarBoard')

' renders the element
MortarBoard('MortarBoard', 'Mortar Board', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MortarBoard
include('fontawesome/Solid/MortarBoard')

' renders the element
MortarBoard('MortarBoard', 'Mortar Board', 'an optional tech label', 'an optional description')
@enduml
```

