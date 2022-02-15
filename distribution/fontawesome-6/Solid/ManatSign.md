# ManatSign


```text
fontawesome-6/Solid/ManatSign
```

```text
include('fontawesome-6/Solid/ManatSign')
```



| Illustration | ManatSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ManatSign.png) | ![illustration for ManatSign](../../fontawesome-6/Solid/ManatSign.Local.png) |




## ManatSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ManatSign
include('fontawesome-6/Solid/ManatSign')

' renders the element
ManatSign('ManatSign', 'Manat Sign', 'an optional tech label')
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

' loads the Item which embeds the element ManatSign
include('fontawesome-6/Solid/ManatSign')

' renders the element
ManatSign('ManatSign', 'Manat Sign', 'an optional tech label')
@enduml
```

