# HandPointDown


```text
fontawesome-5/Regular/HandPointDown
```

```text
include('fontawesome-5/Regular/HandPointDown')
```



| Illustration | HandPointDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/HandPointDown.png) | ![illustration for HandPointDown](../../fontawesome-5/Regular/HandPointDown.Local.png) |




## HandPointDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandPointDown
include('fontawesome-5/Regular/HandPointDown')

' renders the element
HandPointDown('HandPointDown', 'Hand Point Down', 'an optional tech label')
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

' loads the Item which embeds the element HandPointDown
include('fontawesome-5/Regular/HandPointDown')

' renders the element
HandPointDown('HandPointDown', 'Hand Point Down', 'an optional tech label')
@enduml
```

