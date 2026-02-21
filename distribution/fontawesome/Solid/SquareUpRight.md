# SquareUpRight


```text
fontawesome/Solid/SquareUpRight
```

```text
include('fontawesome/Solid/SquareUpRight')
```



| Illustration | SquareUpRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SquareUpRight.png) | ![illustration for SquareUpRight](../../fontawesome/Solid/SquareUpRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareUpRightXs>`
- `<$SquareUpRightSm>`
- `<$SquareUpRightMd>`
- `<$SquareUpRightLg>`





## SquareUpRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareUpRight
include('fontawesome/Solid/SquareUpRight')

' renders the element
SquareUpRight('SquareUpRight', 'Square Up Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareUpRight
include('fontawesome/Solid/SquareUpRight')

' renders the element
SquareUpRight('SquareUpRight', 'Square Up Right', 'an optional tech label', 'an optional description')
@enduml
```

