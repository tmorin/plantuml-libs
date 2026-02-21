# Yubico


```text
simpleicons/Y/Yubico
```

```text
include('simpleicons/Y/Yubico')
```



| Illustration | Yubico |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Y/Yubico.png) | ![illustration for Yubico](../../simpleicons/Y/Yubico.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YubicoXs>`
- `<$YubicoSm>`
- `<$YubicoMd>`
- `<$YubicoLg>`





## Yubico

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Yubico
include('simpleicons/Y/Yubico')

' renders the element
Yubico('Yubico', 'Yubico', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yubico
include('simpleicons/Y/Yubico')

' renders the element
Yubico('Yubico', 'Yubico', 'an optional tech label', 'an optional description')
@enduml
```

