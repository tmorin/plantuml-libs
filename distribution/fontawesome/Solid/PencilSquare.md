# PencilSquare


```text
fontawesome/Solid/PencilSquare
```

```text
include('fontawesome/Solid/PencilSquare')
```



| Illustration | PencilSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PencilSquare.png) | ![illustration for PencilSquare](../../fontawesome/Solid/PencilSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PencilSquareXs>`
- `<$PencilSquareSm>`
- `<$PencilSquareMd>`
- `<$PencilSquareLg>`





## PencilSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PencilSquare
include('fontawesome/Solid/PencilSquare')

' renders the element
PencilSquare('PencilSquare', 'Pencil Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PencilSquare
include('fontawesome/Solid/PencilSquare')

' renders the element
PencilSquare('PencilSquare', 'Pencil Square', 'an optional tech label', 'an optional description')
@enduml
```

