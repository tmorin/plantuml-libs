# Logitech


```text
simpleicons-14/L/Logitech
```

```text
include('simpleicons-14/L/Logitech')
```



| Illustration | Logitech |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Logitech.png) | ![illustration for Logitech](../../simpleicons-14/L/Logitech.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LogitechXs>`
- `<$LogitechSm>`
- `<$LogitechMd>`
- `<$LogitechLg>`





## Logitech

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Logitech
include('simpleicons-14/L/Logitech')

' renders the element
Logitech('Logitech', 'Logitech', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Logitech
include('simpleicons-14/L/Logitech')

' renders the element
Logitech('Logitech', 'Logitech', 'an optional tech label', 'an optional description')
@enduml
```

