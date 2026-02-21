# Lua


```text
simpleicons/L/Lua
```

```text
include('simpleicons/L/Lua')
```



| Illustration | Lua |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lua.png) | ![illustration for Lua](../../simpleicons/L/Lua.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LuaXs>`
- `<$LuaSm>`
- `<$LuaMd>`
- `<$LuaLg>`





## Lua

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lua
include('simpleicons/L/Lua')

' renders the element
Lua('Lua', 'Lua', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lua
include('simpleicons/L/Lua')

' renders the element
Lua('Lua', 'Lua', 'an optional tech label', 'an optional description')
@enduml
```

