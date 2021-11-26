# Eye


```text
fontawesome-5/Regular/Eye
```

```text
include('fontawesome-5/Regular/Eye')
```



| Illustration | Eye |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Eye.png) | ![illustration for Eye](../../fontawesome-5/Regular/Eye.Local.png) |




## Eye

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Eye
include('fontawesome-5/Regular/Eye')

' renders the element
Eye('Eye', 'Eye', 'an optional tech label')
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

' loads the Item which embeds the element Eye
include('fontawesome-5/Regular/Eye')

' renders the element
Eye('Eye', 'Eye', 'an optional tech label')
@enduml
```

