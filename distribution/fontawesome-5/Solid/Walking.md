# Walking


```text
fontawesome-5/Solid/Walking
```

```text
include('fontawesome-5/Solid/Walking')
```



| Illustration | Walking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Walking.png) | ![illustration for Walking](../../fontawesome-5/Solid/Walking.Local.png) |




## Walking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Walking
include('fontawesome-5/Solid/Walking')

' renders the element
Walking('Walking', 'Walking', 'an optional tech label')
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

' loads the Item which embeds the element Walking
include('fontawesome-5/Solid/Walking')

' renders the element
Walking('Walking', 'Walking', 'an optional tech label')
@enduml
```

