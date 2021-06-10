# BorderStyle


```text
fontawesome-5/Solid/BorderStyle
```

```text
include('fontawesome-5/Solid/BorderStyle')
```



| Illustration | BorderStyle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BorderStyle.png) | ![illustration for BorderStyle](../../fontawesome-5/Solid/BorderStyle.Local.png) |




## BorderStyle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BorderStyle
include('fontawesome-5/Solid/BorderStyle')

' renders the element
BorderStyle('BorderStyle', 'Border Style', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BorderStyle
include('fontawesome-5/Solid/BorderStyle')

' renders the element
BorderStyle('BorderStyle', 'Border Style', 'an optional tech label')
@enduml
```

