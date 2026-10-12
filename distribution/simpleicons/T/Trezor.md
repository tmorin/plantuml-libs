# Trezor


```text
simpleicons/T/Trezor
```

```text
include('simpleicons/T/Trezor')
```



| Illustration | Trezor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Trezor.png) | ![illustration for Trezor](../../simpleicons/T/Trezor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrezorXs>`
- `<$TrezorSm>`
- `<$TrezorMd>`
- `<$TrezorLg>`





## Trezor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trezor
include('simpleicons/T/Trezor')

' renders the element
Trezor('Trezor', 'Trezor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trezor
include('simpleicons/T/Trezor')

' renders the element
Trezor('Trezor', 'Trezor', 'an optional tech label', 'an optional description')
@enduml
```

