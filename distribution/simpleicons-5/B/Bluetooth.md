# Bluetooth


```text
simpleicons-5/B/Bluetooth
```

```text
include('simpleicons-5/B/Bluetooth')
```



| Illustration | Bluetooth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bluetooth.png) | ![illustration for Bluetooth](../../simpleicons-5/B/Bluetooth.Local.png) |




## Bluetooth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bluetooth
include('simpleicons-5/B/Bluetooth')

' renders the element
Bluetooth('Bluetooth', 'Bluetooth', 'an optional tech label')
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

' loads the Item which embeds the element Bluetooth
include('simpleicons-5/B/Bluetooth')

' renders the element
Bluetooth('Bluetooth', 'Bluetooth', 'an optional tech label')
@enduml
```

