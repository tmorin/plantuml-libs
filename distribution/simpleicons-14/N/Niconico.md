# Niconico


```text
simpleicons-14/N/Niconico
```

```text
include('simpleicons-14/N/Niconico')
```



| Illustration | Niconico |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Niconico.png) | ![illustration for Niconico](../../simpleicons-14/N/Niconico.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NiconicoXs>`
- `<$NiconicoSm>`
- `<$NiconicoMd>`
- `<$NiconicoLg>`





## Niconico

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Niconico
include('simpleicons-14/N/Niconico')

' renders the element
Niconico('Niconico', 'Niconico', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Niconico
include('simpleicons-14/N/Niconico')

' renders the element
Niconico('Niconico', 'Niconico', 'an optional tech label', 'an optional description')
@enduml
```

