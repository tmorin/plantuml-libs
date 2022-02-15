# BorderNone


```text
fontawesome-6/Solid/BorderNone
```

```text
include('fontawesome-6/Solid/BorderNone')
```



| Illustration | BorderNone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BorderNone.png) | ![illustration for BorderNone](../../fontawesome-6/Solid/BorderNone.Local.png) |




## BorderNone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BorderNone
include('fontawesome-6/Solid/BorderNone')

' renders the element
BorderNone('BorderNone', 'Border None', 'an optional tech label')
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

' loads the Item which embeds the element BorderNone
include('fontawesome-6/Solid/BorderNone')

' renders the element
BorderNone('BorderNone', 'Border None', 'an optional tech label')
@enduml
```

