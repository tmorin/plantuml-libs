# EnhancedEncryption


```text
material-4/Notification/EnhancedEncryption
```

```text
include('material-4/Notification/EnhancedEncryption')
```



| Illustration | EnhancedEncryption |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/EnhancedEncryption.png) | ![illustration for EnhancedEncryption](../../material-4/Notification/EnhancedEncryption.Local.png) |




## EnhancedEncryption

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EnhancedEncryption
include('material-4/Notification/EnhancedEncryption')

' renders the element
EnhancedEncryption('EnhancedEncryption', 'Enhanced Encryption', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element EnhancedEncryption
include('material-4/Notification/EnhancedEncryption')

' renders the element
EnhancedEncryption('EnhancedEncryption', 'Enhanced Encryption', 'an optional tech label')
@enduml
```

