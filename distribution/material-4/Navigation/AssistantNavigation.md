# AssistantNavigation


```text
material-4/Navigation/AssistantNavigation
```

```text
include('material-4/Navigation/AssistantNavigation')
```



| Illustration | AssistantNavigation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/AssistantNavigation.png) | ![illustration for AssistantNavigation](../../material-4/Navigation/AssistantNavigation.Local.png) |




## AssistantNavigation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AssistantNavigation
include('material-4/Navigation/AssistantNavigation')

' renders the element
AssistantNavigation('AssistantNavigation', 'Assistant Navigation', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element AssistantNavigation
include('material-4/Navigation/AssistantNavigation')

' renders the element
AssistantNavigation('AssistantNavigation', 'Assistant Navigation', 'an optional tech label')
@enduml
```

