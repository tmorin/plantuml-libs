# LayerGroup


```text
fontawesome-6/Solid/LayerGroup
```

```text
include('fontawesome-6/Solid/LayerGroup')
```



| Illustration | LayerGroup |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LayerGroup.png) | ![illustration for LayerGroup](../../fontawesome-6/Solid/LayerGroup.Local.png) |




## LayerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LayerGroup
include('fontawesome-6/Solid/LayerGroup')

' renders the element
LayerGroup('LayerGroup', 'Layer Group', 'an optional tech label')
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

' loads the Item which embeds the element LayerGroup
include('fontawesome-6/Solid/LayerGroup')

' renders the element
LayerGroup('LayerGroup', 'Layer Group', 'an optional tech label')
@enduml
```

