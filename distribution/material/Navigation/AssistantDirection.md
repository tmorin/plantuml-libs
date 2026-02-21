# AssistantDirection


```text
material/Navigation/AssistantDirection
```

```text
include('material/Navigation/AssistantDirection')
```



| Illustration | AssistantDirection |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/AssistantDirection.png) | ![illustration for AssistantDirection](../../material/Navigation/AssistantDirection.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element AssistantDirection
include('material/Navigation/AssistantDirection')

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
include('material/bootstrap')

' loads the Item which embeds the element AssistantDirection
include('material/Navigation/AssistantDirection')

' renders the element
AssistantDirection('AssistantDirection', 'Assistant Direction', 'an optional tech label', 'an optional description')
@enduml
```

