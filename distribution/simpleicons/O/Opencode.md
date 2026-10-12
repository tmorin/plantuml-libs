# Opencode


```text
simpleicons/O/Opencode
```

```text
include('simpleicons/O/Opencode')
```



| Illustration | Opencode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Opencode.png) | ![illustration for Opencode](../../simpleicons/O/Opencode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpencodeXs>`
- `<$OpencodeSm>`
- `<$OpencodeMd>`
- `<$OpencodeLg>`





## Opencode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opencode
include('simpleicons/O/Opencode')

' renders the element
Opencode('Opencode', 'Opencode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opencode
include('simpleicons/O/Opencode')

' renders the element
Opencode('Opencode', 'Opencode', 'an optional tech label', 'an optional description')
@enduml
```

