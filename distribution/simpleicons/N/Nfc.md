# Nfc


```text
simpleicons/N/Nfc
```

```text
include('simpleicons/N/Nfc')
```



| Illustration | Nfc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nfc.png) | ![illustration for Nfc](../../simpleicons/N/Nfc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NfcXs>`
- `<$NfcSm>`
- `<$NfcMd>`
- `<$NfcLg>`





## Nfc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nfc
include('simpleicons/N/Nfc')

' renders the element
Nfc('Nfc', 'Nfc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nfc
include('simpleicons/N/Nfc')

' renders the element
Nfc('Nfc', 'Nfc', 'an optional tech label', 'an optional description')
@enduml
```

