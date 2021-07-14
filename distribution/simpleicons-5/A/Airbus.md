# Airbus


```text
simpleicons-5/A/Airbus
```

```text
include('simpleicons-5/A/Airbus')
```



| Illustration | Airbus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Airbus.png) | ![illustration for Airbus](../../simpleicons-5/A/Airbus.Local.png) |




## Airbus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Airbus
include('simpleicons-5/A/Airbus')

' renders the element
Airbus('Airbus', 'Airbus', 'an optional tech label')
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

' loads the Item which embeds the element Airbus
include('simpleicons-5/A/Airbus')

' renders the element
Airbus('Airbus', 'Airbus', 'an optional tech label')
@enduml
```

