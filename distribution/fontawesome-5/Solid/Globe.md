# Globe


```text
fontawesome-5/Solid/Globe
```

```text
include('fontawesome-5/Solid/Globe')
```



| Illustration | Globe |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Globe.png) | ![illustration for Globe](../../fontawesome-5/Solid/Globe.Local.png) |




## Globe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Globe
include('fontawesome-5/Solid/Globe')

' renders the element
Globe('Globe', 'Globe', 'an optional tech label')
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

' loads the Item which embeds the element Globe
include('fontawesome-5/Solid/Globe')

' renders the element
Globe('Globe', 'Globe', 'an optional tech label')
@enduml
```

