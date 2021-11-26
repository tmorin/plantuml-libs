# FastForward


```text
fontawesome-5/Solid/FastForward
```

```text
include('fontawesome-5/Solid/FastForward')
```



| Illustration | FastForward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FastForward.png) | ![illustration for FastForward](../../fontawesome-5/Solid/FastForward.Local.png) |




## FastForward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FastForward
include('fontawesome-5/Solid/FastForward')

' renders the element
FastForward('FastForward', 'Fast Forward', 'an optional tech label')
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

' loads the Item which embeds the element FastForward
include('fontawesome-5/Solid/FastForward')

' renders the element
FastForward('FastForward', 'Fast Forward', 'an optional tech label')
@enduml
```

