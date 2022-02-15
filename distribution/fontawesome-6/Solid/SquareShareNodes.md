# SquareShareNodes


```text
fontawesome-6/Solid/SquareShareNodes
```

```text
include('fontawesome-6/Solid/SquareShareNodes')
```



| Illustration | SquareShareNodes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareShareNodes.png) | ![illustration for SquareShareNodes](../../fontawesome-6/Solid/SquareShareNodes.Local.png) |




## SquareShareNodes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareShareNodes
include('fontawesome-6/Solid/SquareShareNodes')

' renders the element
SquareShareNodes('SquareShareNodes', 'Square Share Nodes', 'an optional tech label')
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

' loads the Item which embeds the element SquareShareNodes
include('fontawesome-6/Solid/SquareShareNodes')

' renders the element
SquareShareNodes('SquareShareNodes', 'Square Share Nodes', 'an optional tech label')
@enduml
```

