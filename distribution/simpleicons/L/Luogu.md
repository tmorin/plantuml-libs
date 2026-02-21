# Luogu


```text
simpleicons/L/Luogu
```

```text
include('simpleicons/L/Luogu')
```



| Illustration | Luogu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Luogu.png) | ![illustration for Luogu](../../simpleicons/L/Luogu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LuoguXs>`
- `<$LuoguSm>`
- `<$LuoguMd>`
- `<$LuoguLg>`





## Luogu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Luogu
include('simpleicons/L/Luogu')

' renders the element
Luogu('Luogu', 'Luogu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Luogu
include('simpleicons/L/Luogu')

' renders the element
Luogu('Luogu', 'Luogu', 'an optional tech label', 'an optional description')
@enduml
```

