# Nfc


```text
simpleicons-5/N/Nfc
```

```text
include('simpleicons-5/N/Nfc')
```



| Illustration | Nfc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nfc.png) | ![illustration for Nfc](../../simpleicons-5/N/Nfc.Local.png) |




## Nfc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nfc
include('simpleicons-5/N/Nfc')

' renders the element
Nfc('Nfc', 'Nfc', 'an optional tech label')
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

' loads the Item which embeds the element Nfc
include('simpleicons-5/N/Nfc')

' renders the element
Nfc('Nfc', 'Nfc', 'an optional tech label')
@enduml
```

