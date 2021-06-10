# HandPointUp


```text
fontawesome-5/Solid/HandPointUp
```

```text
include('fontawesome-5/Solid/HandPointUp')
```



| Illustration | HandPointUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandPointUp.png) | ![illustration for HandPointUp](../../fontawesome-5/Solid/HandPointUp.Local.png) |




## HandPointUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandPointUp
include('fontawesome-5/Solid/HandPointUp')

' renders the element
HandPointUp('HandPointUp', 'Hand Point Up', 'an optional tech label')
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

' loads the Item which embeds the element HandPointUp
include('fontawesome-5/Solid/HandPointUp')

' renders the element
HandPointUp('HandPointUp', 'Hand Point Up', 'an optional tech label')
@enduml
```

