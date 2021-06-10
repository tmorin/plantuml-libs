# HandPointRight


```text
fontawesome-5/Regular/HandPointRight
```

```text
include('fontawesome-5/Regular/HandPointRight')
```



| Illustration | HandPointRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/HandPointRight.png) | ![illustration for HandPointRight](../../fontawesome-5/Regular/HandPointRight.Local.png) |




## HandPointRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandPointRight
include('fontawesome-5/Regular/HandPointRight')

' renders the element
HandPointRight('HandPointRight', 'Hand Point Right', 'an optional tech label')
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

' loads the Item which embeds the element HandPointRight
include('fontawesome-5/Regular/HandPointRight')

' renders the element
HandPointRight('HandPointRight', 'Hand Point Right', 'an optional tech label')
@enduml
```

