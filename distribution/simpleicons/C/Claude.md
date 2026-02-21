# Claude


```text
simpleicons/C/Claude
```

```text
include('simpleicons/C/Claude')
```



| Illustration | Claude |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Claude.png) | ![illustration for Claude](../../simpleicons/C/Claude.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClaudeXs>`
- `<$ClaudeSm>`
- `<$ClaudeMd>`
- `<$ClaudeLg>`





## Claude

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Claude
include('simpleicons/C/Claude')

' renders the element
Claude('Claude', 'Claude', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Claude
include('simpleicons/C/Claude')

' renders the element
Claude('Claude', 'Claude', 'an optional tech label', 'an optional description')
@enduml
```

