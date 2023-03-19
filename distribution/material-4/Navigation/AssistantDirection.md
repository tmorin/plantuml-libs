# AssistantDirection


```text
material-4/Navigation/AssistantDirection
```

```text
include('material-4/Navigation/AssistantDirection')
```



| Illustration | AssistantDirection |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/AssistantDirection.png) | ![illustration for AssistantDirection](../../material-4/Navigation/AssistantDirection.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AssistantDirectionXs>`
- `<$AssistantDirectionSm>`
- `<$AssistantDirectionMd>`
- `<$AssistantDirectionLg>`





## AssistantDirection

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AssistantDirection
include('material-4/Navigation/AssistantDirection')

' renders the element
AssistantDirection('AssistantDirection', 'Assistant Direction', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AssistantDirection
include('material-4/Navigation/AssistantDirection')

' renders the element
AssistantDirection('AssistantDirection', 'Assistant Direction', 'an optional tech label', 'an optional description')
@enduml
```

