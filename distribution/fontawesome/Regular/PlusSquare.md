# PlusSquare


```text
fontawesome/Regular/PlusSquare
```

```text
include('fontawesome/Regular/PlusSquare')
```



| Illustration | PlusSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/PlusSquare.png) | ![illustration for PlusSquare](../../fontawesome/Regular/PlusSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlusSquareXs>`
- `<$PlusSquareSm>`
- `<$PlusSquareMd>`
- `<$PlusSquareLg>`





## PlusSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlusSquare
include('fontawesome/Regular/PlusSquare')

' renders the element
PlusSquare('PlusSquare', 'Plus Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlusSquare
include('fontawesome/Regular/PlusSquare')

' renders the element
PlusSquare('PlusSquare', 'Plus Square', 'an optional tech label', 'an optional description')
@enduml
```

