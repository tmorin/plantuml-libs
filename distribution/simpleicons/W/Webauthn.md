# Webauthn


```text
simpleicons/W/Webauthn
```

```text
include('simpleicons/W/Webauthn')
```



| Illustration | Webauthn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Webauthn.png) | ![illustration for Webauthn](../../simpleicons/W/Webauthn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebauthnXs>`
- `<$WebauthnSm>`
- `<$WebauthnMd>`
- `<$WebauthnLg>`





## Webauthn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Webauthn
include('simpleicons/W/Webauthn')

' renders the element
Webauthn('Webauthn', 'Webauthn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Webauthn
include('simpleicons/W/Webauthn')

' renders the element
Webauthn('Webauthn', 'Webauthn', 'an optional tech label', 'an optional description')
@enduml
```

