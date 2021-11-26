# Capacitor


```text
simpleicons-5/C/Capacitor
```

```text
include('simpleicons-5/C/Capacitor')
```



| Illustration | Capacitor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Capacitor.png) | ![illustration for Capacitor](../../simpleicons-5/C/Capacitor.Local.png) |




## Capacitor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Capacitor
include('simpleicons-5/C/Capacitor')

' renders the element
Capacitor('Capacitor', 'Capacitor', 'an optional tech label')
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

' loads the Item which embeds the element Capacitor
include('simpleicons-5/C/Capacitor')

' renders the element
Capacitor('Capacitor', 'Capacitor', 'an optional tech label')
@enduml
```

