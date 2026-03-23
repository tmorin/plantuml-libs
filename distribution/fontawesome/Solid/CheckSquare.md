# CheckSquare


```text
fontawesome/Solid/CheckSquare
```

```text
include('fontawesome/Solid/CheckSquare')
```



| Illustration | CheckSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CheckSquare.png) | ![illustration for CheckSquare](../../fontawesome/Solid/CheckSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckSquareXs>`
- `<$CheckSquareSm>`
- `<$CheckSquareMd>`
- `<$CheckSquareLg>`





## CheckSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CheckSquare
include('fontawesome/Solid/CheckSquare')

' renders the element
CheckSquare('CheckSquare', 'Check Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CheckSquare
include('fontawesome/Solid/CheckSquare')

' renders the element
CheckSquare('CheckSquare', 'Check Square', 'an optional tech label', 'an optional description')
@enduml
```

