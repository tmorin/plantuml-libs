# Industry


```text
fontawesome-5/Solid/Industry
```

```text
include('fontawesome-5/Solid/Industry')
```



| Illustration | Industry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Industry.png) | ![illustration for Industry](../../fontawesome-5/Solid/Industry.Local.png) |




## Industry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Industry
include('fontawesome-5/Solid/Industry')

' renders the element
Industry('Industry', 'Industry', 'an optional tech label')
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

' loads the Item which embeds the element Industry
include('fontawesome-5/Solid/Industry')

' renders the element
Industry('Industry', 'Industry', 'an optional tech label')
@enduml
```

