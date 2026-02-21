# Shieldsdotio


```text
simpleicons/S/Shieldsdotio
```

```text
include('simpleicons/S/Shieldsdotio')
```



| Illustration | Shieldsdotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Shieldsdotio.png) | ![illustration for Shieldsdotio](../../simpleicons/S/Shieldsdotio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShieldsdotioXs>`
- `<$ShieldsdotioSm>`
- `<$ShieldsdotioMd>`
- `<$ShieldsdotioLg>`





## Shieldsdotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Shieldsdotio
include('simpleicons/S/Shieldsdotio')

' renders the element
Shieldsdotio('Shieldsdotio', 'Shieldsdotio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shieldsdotio
include('simpleicons/S/Shieldsdotio')

' renders the element
Shieldsdotio('Shieldsdotio', 'Shieldsdotio', 'an optional tech label', 'an optional description')
@enduml
```

