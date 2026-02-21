# Nushell


```text
simpleicons-14/N/Nushell
```

```text
include('simpleicons-14/N/Nushell')
```



| Illustration | Nushell |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nushell.png) | ![illustration for Nushell](../../simpleicons-14/N/Nushell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NushellXs>`
- `<$NushellSm>`
- `<$NushellMd>`
- `<$NushellLg>`





## Nushell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nushell
include('simpleicons-14/N/Nushell')

' renders the element
Nushell('Nushell', 'Nushell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nushell
include('simpleicons-14/N/Nushell')

' renders the element
Nushell('Nushell', 'Nushell', 'an optional tech label', 'an optional description')
@enduml
```

