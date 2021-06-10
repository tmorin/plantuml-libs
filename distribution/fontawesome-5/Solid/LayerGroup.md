# LayerGroup


```text
fontawesome-5/Solid/LayerGroup
```

```text
include('fontawesome-5/Solid/LayerGroup')
```



| Illustration | LayerGroup |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LayerGroup.png) | ![illustration for LayerGroup](../../fontawesome-5/Solid/LayerGroup.Local.png) |




## LayerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LayerGroup
include('fontawesome-5/Solid/LayerGroup')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LayerGroup
include('fontawesome-5/Solid/LayerGroup')

' renders the element
LayerGroup('LayerGroup', 'Layer Group', 'an optional tech label')
@enduml
```

