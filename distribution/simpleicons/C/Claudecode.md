# Claudecode


```text
simpleicons/C/Claudecode
```

```text
include('simpleicons/C/Claudecode')
```



| Illustration | Claudecode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Claudecode.png) | ![illustration for Claudecode](../../simpleicons/C/Claudecode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClaudecodeXs>`
- `<$ClaudecodeSm>`
- `<$ClaudecodeMd>`
- `<$ClaudecodeLg>`





## Claudecode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Claudecode
include('simpleicons/C/Claudecode')

' renders the element
Claudecode('Claudecode', 'Claudecode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Claudecode
include('simpleicons/C/Claudecode')

' renders the element
Claudecode('Claudecode', 'Claudecode', 'an optional tech label', 'an optional description')
@enduml
```

