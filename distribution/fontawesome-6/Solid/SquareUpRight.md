# SquareUpRight


```text
fontawesome-6/Solid/SquareUpRight
```

```text
include('fontawesome-6/Solid/SquareUpRight')
```



| Illustration | SquareUpRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareUpRight.png) | ![illustration for SquareUpRight](../../fontawesome-6/Solid/SquareUpRight.Local.png) |




## SquareUpRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareUpRight
include('fontawesome-6/Solid/SquareUpRight')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareUpRight
include('fontawesome-6/Solid/SquareUpRight')

' renders the element
SquareUpRight('SquareUpRight', 'Square Up Right', 'an optional tech label', 'an optional description')
@enduml
```

