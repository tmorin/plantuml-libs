# SquareH


```text
fontawesome-6/Solid/SquareH
```

```text
include('fontawesome-6/Solid/SquareH')
```



| Illustration | SquareH |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareH.png) | ![illustration for SquareH](../../fontawesome-6/Solid/SquareH.Local.png) |




## SquareH

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareH
include('fontawesome-6/Solid/SquareH')

' renders the element
SquareH('SquareH', 'Square H', 'an optional tech label')
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

' loads the Item which embeds the element SquareH
include('fontawesome-6/Solid/SquareH')

' renders the element
SquareH('SquareH', 'Square H', 'an optional tech label')
@enduml
```

