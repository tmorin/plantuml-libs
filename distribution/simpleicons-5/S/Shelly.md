# Shelly


```text
simpleicons-5/S/Shelly
```

```text
include('simpleicons-5/S/Shelly')
```



| Illustration | Shelly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Shelly.png) | ![illustration for Shelly](../../simpleicons-5/S/Shelly.Local.png) |




## Shelly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Shelly
include('simpleicons-5/S/Shelly')

' renders the element
Shelly('Shelly', 'Shelly', 'an optional tech label')
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

' loads the Item which embeds the element Shelly
include('simpleicons-5/S/Shelly')

' renders the element
Shelly('Shelly', 'Shelly', 'an optional tech label')
@enduml
```

