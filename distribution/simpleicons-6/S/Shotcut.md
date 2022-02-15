# Shotcut


```text
simpleicons-6/S/Shotcut
```

```text
include('simpleicons-6/S/Shotcut')
```



| Illustration | Shotcut |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Shotcut.png) | ![illustration for Shotcut](../../simpleicons-6/S/Shotcut.Local.png) |




## Shotcut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Shotcut
include('simpleicons-6/S/Shotcut')

' renders the element
Shotcut('Shotcut', 'Shotcut', 'an optional tech label')
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

' loads the Item which embeds the element Shotcut
include('simpleicons-6/S/Shotcut')

' renders the element
Shotcut('Shotcut', 'Shotcut', 'an optional tech label')
@enduml
```

