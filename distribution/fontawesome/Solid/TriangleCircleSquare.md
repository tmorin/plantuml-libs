# TriangleCircleSquare


```text
fontawesome/Solid/TriangleCircleSquare
```

```text
include('fontawesome/Solid/TriangleCircleSquare')
```



| Illustration | TriangleCircleSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TriangleCircleSquare.png) | ![illustration for TriangleCircleSquare](../../fontawesome/Solid/TriangleCircleSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TriangleCircleSquareXs>`
- `<$TriangleCircleSquareSm>`
- `<$TriangleCircleSquareMd>`
- `<$TriangleCircleSquareLg>`





## TriangleCircleSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TriangleCircleSquare
include('fontawesome/Solid/TriangleCircleSquare')

' renders the element
TriangleCircleSquare('TriangleCircleSquare', 'Triangle Circle Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TriangleCircleSquare
include('fontawesome/Solid/TriangleCircleSquare')

' renders the element
TriangleCircleSquare('TriangleCircleSquare', 'Triangle Circle Square', 'an optional tech label', 'an optional description')
@enduml
```

