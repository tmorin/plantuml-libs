# Peace


```text
fontawesome-5/Solid/Peace
```

```text
include('fontawesome-5/Solid/Peace')
```



| Illustration | Peace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Peace.png) | ![illustration for Peace](../../fontawesome-5/Solid/Peace.Local.png) |




## Peace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Peace
include('fontawesome-5/Solid/Peace')

' renders the element
Peace('Peace', 'Peace', 'an optional tech label')
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

' loads the Item which embeds the element Peace
include('fontawesome-5/Solid/Peace')

' renders the element
Peace('Peace', 'Peace', 'an optional tech label')
@enduml
```

