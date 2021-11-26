# NoEncryption


```text
material-4/Notification/NoEncryption
```

```text
include('material-4/Notification/NoEncryption')
```



| Illustration | NoEncryption |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/NoEncryption.png) | ![illustration for NoEncryption](../../material-4/Notification/NoEncryption.Local.png) |




## NoEncryption

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoEncryption
include('material-4/Notification/NoEncryption')

' renders the element
NoEncryption('NoEncryption', 'No Encryption', 'an optional tech label')
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

' loads the Item which embeds the element NoEncryption
include('material-4/Notification/NoEncryption')

' renders the element
NoEncryption('NoEncryption', 'No Encryption', 'an optional tech label')
@enduml
```

