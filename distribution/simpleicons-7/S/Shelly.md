# Shelly


```text
simpleicons-7/S/Shelly
```

```text
include('simpleicons-7/S/Shelly')
```



| Illustration | Shelly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Shelly.png) | ![illustration for Shelly](../../simpleicons-7/S/Shelly.Local.png) |




## Shelly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Shelly
include('simpleicons-7/S/Shelly')

' renders the element
Shelly('Shelly', 'Shelly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shelly
include('simpleicons-7/S/Shelly')

' renders the element
Shelly('Shelly', 'Shelly', 'an optional tech label', 'an optional description')
@enduml
```

