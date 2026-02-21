# Tina


```text
simpleicons-14/T/Tina
```

```text
include('simpleicons-14/T/Tina')
```



| Illustration | Tina |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tina.png) | ![illustration for Tina](../../simpleicons-14/T/Tina.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TinaXs>`
- `<$TinaSm>`
- `<$TinaMd>`
- `<$TinaLg>`





## Tina

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tina
include('simpleicons-14/T/Tina')

' renders the element
Tina('Tina', 'Tina', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tina
include('simpleicons-14/T/Tina')

' renders the element
Tina('Tina', 'Tina', 'an optional tech label', 'an optional description')
@enduml
```

