# Clickup


```text
simpleicons-6/C/Clickup
```

```text
include('simpleicons-6/C/Clickup')
```



| Illustration | Clickup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Clickup.png) | ![illustration for Clickup](../../simpleicons-6/C/Clickup.Local.png) |




## Clickup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Clickup
include('simpleicons-6/C/Clickup')

' renders the element
Clickup('Clickup', 'Clickup', 'an optional tech label')
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

' loads the Item which embeds the element Clickup
include('simpleicons-6/C/Clickup')

' renders the element
Clickup('Clickup', 'Clickup', 'an optional tech label')
@enduml
```

