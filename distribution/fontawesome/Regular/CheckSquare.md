# CheckSquare


```text
fontawesome/Regular/CheckSquare
```

```text
include('fontawesome/Regular/CheckSquare')
```



| Illustration | CheckSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CheckSquare.png) | ![illustration for CheckSquare](../../fontawesome/Regular/CheckSquare.Local.png) |



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
include('fontawesome/Regular/CheckSquare')

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
include('fontawesome/Regular/CheckSquare')

' renders the element
CheckSquare('CheckSquare', 'Check Square', 'an optional tech label', 'an optional description')
@enduml
```

