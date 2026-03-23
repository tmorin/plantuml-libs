# ListSquares


```text
fontawesome/Solid/ListSquares
```

```text
include('fontawesome/Solid/ListSquares')
```



| Illustration | ListSquares |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ListSquares.png) | ![illustration for ListSquares](../../fontawesome/Solid/ListSquares.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ListSquaresXs>`
- `<$ListSquaresSm>`
- `<$ListSquaresMd>`
- `<$ListSquaresLg>`





## ListSquares

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ListSquares
include('fontawesome/Solid/ListSquares')

' renders the element
ListSquares('ListSquares', 'List Squares', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ListSquares
include('fontawesome/Solid/ListSquares')

' renders the element
ListSquares('ListSquares', 'List Squares', 'an optional tech label', 'an optional description')
@enduml
```

