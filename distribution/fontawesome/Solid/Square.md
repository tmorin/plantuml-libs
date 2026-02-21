# Square


```text
fontawesome/Solid/Square
```

```text
include('fontawesome/Solid/Square')
```



| Illustration | Square |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Square.png) | ![illustration for Square](../../fontawesome/Solid/Square.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareXs>`
- `<$SquareSm>`
- `<$SquareMd>`
- `<$SquareLg>`





## Square

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Square
include('fontawesome/Solid/Square')

' renders the element
Square('Square', 'Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Square
include('fontawesome/Solid/Square')

' renders the element
Square('Square', 'Square', 'an optional tech label', 'an optional description')
@enduml
```

