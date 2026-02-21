# Wattpad


```text
simpleicons/W/Wattpad
```

```text
include('simpleicons/W/Wattpad')
```



| Illustration | Wattpad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wattpad.png) | ![illustration for Wattpad](../../simpleicons/W/Wattpad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WattpadXs>`
- `<$WattpadSm>`
- `<$WattpadMd>`
- `<$WattpadLg>`





## Wattpad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wattpad
include('simpleicons/W/Wattpad')

' renders the element
Wattpad('Wattpad', 'Wattpad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wattpad
include('simpleicons/W/Wattpad')

' renders the element
Wattpad('Wattpad', 'Wattpad', 'an optional tech label', 'an optional description')
@enduml
```

