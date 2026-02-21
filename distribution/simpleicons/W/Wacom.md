# Wacom


```text
simpleicons/W/Wacom
```

```text
include('simpleicons/W/Wacom')
```



| Illustration | Wacom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wacom.png) | ![illustration for Wacom](../../simpleicons/W/Wacom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WacomXs>`
- `<$WacomSm>`
- `<$WacomMd>`
- `<$WacomLg>`





## Wacom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wacom
include('simpleicons/W/Wacom')

' renders the element
Wacom('Wacom', 'Wacom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wacom
include('simpleicons/W/Wacom')

' renders the element
Wacom('Wacom', 'Wacom', 'an optional tech label', 'an optional description')
@enduml
```

