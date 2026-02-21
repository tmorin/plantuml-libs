# Nfc


```text
material/Device/Nfc
```

```text
include('material/Device/Nfc')
```



| Illustration | Nfc |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/Nfc.png) | ![illustration for Nfc](../../material/Device/Nfc.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Nfc
include('material/Device/Nfc')

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
include('material/bootstrap')

' loads the Item which embeds the element Nfc
include('material/Device/Nfc')

' renders the element
Nfc('Nfc', 'Nfc', 'an optional tech label', 'an optional description')
@enduml
```

