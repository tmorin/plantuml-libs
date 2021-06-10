# Kiss


```text
fontawesome-5/Solid/Kiss
```

```text
include('fontawesome-5/Solid/Kiss')
```



| Illustration | Kiss |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Kiss.png) | ![illustration for Kiss](../../fontawesome-5/Solid/Kiss.Local.png) |




## Kiss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Kiss
include('fontawesome-5/Solid/Kiss')

' renders the element
Kiss('Kiss', 'Kiss', 'an optional tech label')
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

' loads the Item which embeds the element Kiss
include('fontawesome-5/Solid/Kiss')

' renders the element
Kiss('Kiss', 'Kiss', 'an optional tech label')
@enduml
```

