# Bluetooth


```text
fontawesome-5/Brands/Bluetooth
```

```text
include('fontawesome-5/Brands/Bluetooth')
```



| Illustration | Bluetooth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Bluetooth.png) | ![illustration for Bluetooth](../../fontawesome-5/Brands/Bluetooth.Local.png) |




## Bluetooth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bluetooth
include('fontawesome-5/Brands/Bluetooth')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bluetooth
include('fontawesome-5/Brands/Bluetooth')

' renders the element
Bluetooth('Bluetooth', 'Bluetooth', 'an optional tech label')
@enduml
```

