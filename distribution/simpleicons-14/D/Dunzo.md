# Dunzo


```text
simpleicons-14/D/Dunzo
```

```text
include('simpleicons-14/D/Dunzo')
```



| Illustration | Dunzo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dunzo.png) | ![illustration for Dunzo](../../simpleicons-14/D/Dunzo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DunzoXs>`
- `<$DunzoSm>`
- `<$DunzoMd>`
- `<$DunzoLg>`





## Dunzo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dunzo
include('simpleicons-14/D/Dunzo')

' renders the element
Dunzo('Dunzo', 'Dunzo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dunzo
include('simpleicons-14/D/Dunzo')

' renders the element
Dunzo('Dunzo', 'Dunzo', 'an optional tech label', 'an optional description')
@enduml
```

