# Airbus


```text
simpleicons-6/A/Airbus
```

```text
include('simpleicons-6/A/Airbus')
```



| Illustration | Airbus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Airbus.png) | ![illustration for Airbus](../../simpleicons-6/A/Airbus.Local.png) |




## Airbus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Airbus
include('simpleicons-6/A/Airbus')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Airbus
include('simpleicons-6/A/Airbus')

' renders the element
Airbus('Airbus', 'Airbus', 'an optional tech label')
@enduml
```

