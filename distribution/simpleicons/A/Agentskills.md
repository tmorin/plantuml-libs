# Agentskills


```text
simpleicons/A/Agentskills
```

```text
include('simpleicons/A/Agentskills')
```



| Illustration | Agentskills |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Agentskills.png) | ![illustration for Agentskills](../../simpleicons/A/Agentskills.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AgentskillsXs>`
- `<$AgentskillsSm>`
- `<$AgentskillsMd>`
- `<$AgentskillsLg>`





## Agentskills

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Agentskills
include('simpleicons/A/Agentskills')

' renders the element
Agentskills('Agentskills', 'Agentskills', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Agentskills
include('simpleicons/A/Agentskills')

' renders the element
Agentskills('Agentskills', 'Agentskills', 'an optional tech label', 'an optional description')
@enduml
```

