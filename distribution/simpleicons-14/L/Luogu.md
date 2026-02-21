# Luogu


```text
simpleicons-14/L/Luogu
```

```text
include('simpleicons-14/L/Luogu')
```



| Illustration | Luogu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Luogu.png) | ![illustration for Luogu](../../simpleicons-14/L/Luogu.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Luogu
include('simpleicons-14/L/Luogu')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Luogu
include('simpleicons-14/L/Luogu')

' renders the element
Luogu('Luogu', 'Luogu', 'an optional tech label', 'an optional description')
@enduml
```

