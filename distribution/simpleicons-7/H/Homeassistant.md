# Homeassistant


```text
simpleicons-7/H/Homeassistant
```

```text
include('simpleicons-7/H/Homeassistant')
```



| Illustration | Homeassistant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Homeassistant.png) | ![illustration for Homeassistant](../../simpleicons-7/H/Homeassistant.Local.png) |




## Homeassistant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Homeassistant
include('simpleicons-7/H/Homeassistant')

' renders the element
Homeassistant('Homeassistant', 'Homeassistant', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Homeassistant
include('simpleicons-7/H/Homeassistant')

' renders the element
Homeassistant('Homeassistant', 'Homeassistant', 'an optional tech label')
@enduml
```

