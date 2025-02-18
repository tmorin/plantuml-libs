# Icinga


```text
simpleicons-14/I/Icinga
```

```text
include('simpleicons-14/I/Icinga')
```



| Illustration | Icinga |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Icinga.png) | ![illustration for Icinga](../../simpleicons-14/I/Icinga.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IcingaXs>`
- `<$IcingaSm>`
- `<$IcingaMd>`
- `<$IcingaLg>`





## Icinga

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Icinga
include('simpleicons-14/I/Icinga')

' renders the element
Icinga('Icinga', 'Icinga', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Icinga
include('simpleicons-14/I/Icinga')

' renders the element
Icinga('Icinga', 'Icinga', 'an optional tech label', 'an optional description')
@enduml
```

