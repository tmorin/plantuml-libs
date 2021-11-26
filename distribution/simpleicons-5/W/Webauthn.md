# Webauthn


```text
simpleicons-5/W/Webauthn
```

```text
include('simpleicons-5/W/Webauthn')
```



| Illustration | Webauthn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Webauthn.png) | ![illustration for Webauthn](../../simpleicons-5/W/Webauthn.Local.png) |




## Webauthn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Webauthn
include('simpleicons-5/W/Webauthn')

' renders the element
Webauthn('Webauthn', 'Webauthn', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Webauthn
include('simpleicons-5/W/Webauthn')

' renders the element
Webauthn('Webauthn', 'Webauthn', 'an optional tech label')
@enduml
```

