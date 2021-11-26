# HandPointUp


```text
fontawesome-5/Regular/HandPointUp
```

```text
include('fontawesome-5/Regular/HandPointUp')
```



| Illustration | HandPointUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/HandPointUp.png) | ![illustration for HandPointUp](../../fontawesome-5/Regular/HandPointUp.Local.png) |




## HandPointUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandPointUp
include('fontawesome-5/Regular/HandPointUp')

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
include('fontawesome-5/Regular/HandPointUp')

' renders the element
HandPointUp('HandPointUp', 'Hand Point Up', 'an optional tech label')
@enduml
```

