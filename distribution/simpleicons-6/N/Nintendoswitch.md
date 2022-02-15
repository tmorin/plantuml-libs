# Nintendoswitch


```text
simpleicons-6/N/Nintendoswitch
```

```text
include('simpleicons-6/N/Nintendoswitch')
```



| Illustration | Nintendoswitch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nintendoswitch.png) | ![illustration for Nintendoswitch](../../simpleicons-6/N/Nintendoswitch.Local.png) |




## Nintendoswitch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nintendoswitch
include('simpleicons-6/N/Nintendoswitch')

' renders the element
Nintendoswitch('Nintendoswitch', 'Nintendoswitch', 'an optional tech label')
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

' loads the Item which embeds the element Nintendoswitch
include('simpleicons-6/N/Nintendoswitch')

' renders the element
Nintendoswitch('Nintendoswitch', 'Nintendoswitch', 'an optional tech label')
@enduml
```

