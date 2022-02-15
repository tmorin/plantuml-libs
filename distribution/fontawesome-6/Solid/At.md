# At


```text
fontawesome-6/Solid/At
```

```text
include('fontawesome-6/Solid/At')
```



| Illustration | At |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/At.png) | ![illustration for At](../../fontawesome-6/Solid/At.Local.png) |




## At

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element At
include('fontawesome-6/Solid/At')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element At
include('fontawesome-6/Solid/At')

' renders the element
At('At', 'At', 'an optional tech label')
@enduml
```

