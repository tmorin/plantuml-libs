# Wattpad


```text
simpleicons-6/W/Wattpad
```

```text
include('simpleicons-6/W/Wattpad')
```



| Illustration | Wattpad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wattpad.png) | ![illustration for Wattpad](../../simpleicons-6/W/Wattpad.Local.png) |




## Wattpad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wattpad
include('simpleicons-6/W/Wattpad')

' renders the element
Wattpad('Wattpad', 'Wattpad', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wattpad
include('simpleicons-6/W/Wattpad')

' renders the element
Wattpad('Wattpad', 'Wattpad', 'an optional tech label')
@enduml
```

