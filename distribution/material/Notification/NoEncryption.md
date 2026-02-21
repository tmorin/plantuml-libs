# NoEncryption


```text
material/Notification/NoEncryption
```

```text
include('material/Notification/NoEncryption')
```



| Illustration | NoEncryption |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/NoEncryption.png) | ![illustration for NoEncryption](../../material/Notification/NoEncryption.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NoEncryptionXs>`
- `<$NoEncryptionSm>`
- `<$NoEncryptionMd>`
- `<$NoEncryptionLg>`





## NoEncryption

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NoEncryption
include('material/Notification/NoEncryption')

' renders the element
NoEncryption('NoEncryption', 'No Encryption', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NoEncryption
include('material/Notification/NoEncryption')

' renders the element
NoEncryption('NoEncryption', 'No Encryption', 'an optional tech label', 'an optional description')
@enduml
```

