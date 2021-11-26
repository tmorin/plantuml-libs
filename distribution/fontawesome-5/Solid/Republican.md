# Republican


```text
fontawesome-5/Solid/Republican
```

```text
include('fontawesome-5/Solid/Republican')
```



| Illustration | Republican |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Republican.png) | ![illustration for Republican](../../fontawesome-5/Solid/Republican.Local.png) |




## Republican

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Republican
include('fontawesome-5/Solid/Republican')

' renders the element
Republican('Republican', 'Republican', 'an optional tech label')
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

' loads the Item which embeds the element Republican
include('fontawesome-5/Solid/Republican')

' renders the element
Republican('Republican', 'Republican', 'an optional tech label')
@enduml
```

