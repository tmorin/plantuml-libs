# Pills


```text
fontawesome-5/Solid/Pills
```

```text
include('fontawesome-5/Solid/Pills')
```



| Illustration | Pills |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Pills.png) | ![illustration for Pills](../../fontawesome-5/Solid/Pills.Local.png) |




## Pills

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Pills
include('fontawesome-5/Solid/Pills')

' renders the element
Pills('Pills', 'Pills', 'an optional tech label')
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

' loads the Item which embeds the element Pills
include('fontawesome-5/Solid/Pills')

' renders the element
Pills('Pills', 'Pills', 'an optional tech label')
@enduml
```

