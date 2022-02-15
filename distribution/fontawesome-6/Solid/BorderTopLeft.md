# BorderTopLeft


```text
fontawesome-6/Solid/BorderTopLeft
```

```text
include('fontawesome-6/Solid/BorderTopLeft')
```



| Illustration | BorderTopLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BorderTopLeft.png) | ![illustration for BorderTopLeft](../../fontawesome-6/Solid/BorderTopLeft.Local.png) |




## BorderTopLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BorderTopLeft
include('fontawesome-6/Solid/BorderTopLeft')

' renders the element
BorderTopLeft('BorderTopLeft', 'Border Top Left', 'an optional tech label')
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

' loads the Item which embeds the element BorderTopLeft
include('fontawesome-6/Solid/BorderTopLeft')

' renders the element
BorderTopLeft('BorderTopLeft', 'Border Top Left', 'an optional tech label')
@enduml
```

