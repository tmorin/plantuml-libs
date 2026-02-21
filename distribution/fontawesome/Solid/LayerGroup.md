# LayerGroup


```text
fontawesome/Solid/LayerGroup
```

```text
include('fontawesome/Solid/LayerGroup')
```



| Illustration | LayerGroup |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LayerGroup.png) | ![illustration for LayerGroup](../../fontawesome/Solid/LayerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LayerGroupXs>`
- `<$LayerGroupSm>`
- `<$LayerGroupMd>`
- `<$LayerGroupLg>`





## LayerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LayerGroup
include('fontawesome/Solid/LayerGroup')

' renders the element
LayerGroup('LayerGroup', 'Layer Group', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element LayerGroup
include('fontawesome/Solid/LayerGroup')

' renders the element
LayerGroup('LayerGroup', 'Layer Group', 'an optional tech label', 'an optional description')
@enduml
```

