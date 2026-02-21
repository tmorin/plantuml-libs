# Ltspice


```text
simpleicons-14/L/Ltspice
```

```text
include('simpleicons-14/L/Ltspice')
```



| Illustration | Ltspice |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Ltspice.png) | ![illustration for Ltspice](../../simpleicons-14/L/Ltspice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LtspiceXs>`
- `<$LtspiceSm>`
- `<$LtspiceMd>`
- `<$LtspiceLg>`





## Ltspice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ltspice
include('simpleicons-14/L/Ltspice')

' renders the element
Ltspice('Ltspice', 'Ltspice', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ltspice
include('simpleicons-14/L/Ltspice')

' renders the element
Ltspice('Ltspice', 'Ltspice', 'an optional tech label', 'an optional description')
@enduml
```

