# Luau


```text
simpleicons/L/Luau
```

```text
include('simpleicons/L/Luau')
```



| Illustration | Luau |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Luau.png) | ![illustration for Luau](../../simpleicons/L/Luau.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LuauXs>`
- `<$LuauSm>`
- `<$LuauMd>`
- `<$LuauLg>`





## Luau

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Luau
include('simpleicons/L/Luau')

' renders the element
Luau('Luau', 'Luau', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Luau
include('simpleicons/L/Luau')

' renders the element
Luau('Luau', 'Luau', 'an optional tech label', 'an optional description')
@enduml
```

