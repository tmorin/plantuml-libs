# At


```text
fontawesome-5/Solid/At
```

```text
include('fontawesome-5/Solid/At')
```



| Illustration | At |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/At.png) | ![illustration for At](../../fontawesome-5/Solid/At.Local.png) |




## At

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element At
include('fontawesome-5/Solid/At')

' renders the element
At('At', 'At', 'an optional tech label')
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

' loads the Item which embeds the element At
include('fontawesome-5/Solid/At')

' renders the element
At('At', 'At', 'an optional tech label')
@enduml
```

