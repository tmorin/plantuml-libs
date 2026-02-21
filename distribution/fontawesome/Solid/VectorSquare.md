# VectorSquare


```text
fontawesome/Solid/VectorSquare
```

```text
include('fontawesome/Solid/VectorSquare')
```



| Illustration | VectorSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VectorSquare.png) | ![illustration for VectorSquare](../../fontawesome/Solid/VectorSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VectorSquareXs>`
- `<$VectorSquareSm>`
- `<$VectorSquareMd>`
- `<$VectorSquareLg>`





## VectorSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VectorSquare
include('fontawesome/Solid/VectorSquare')

' renders the element
VectorSquare('VectorSquare', 'Vector Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VectorSquare
include('fontawesome/Solid/VectorSquare')

' renders the element
VectorSquare('VectorSquare', 'Vector Square', 'an optional tech label', 'an optional description')
@enduml
```

