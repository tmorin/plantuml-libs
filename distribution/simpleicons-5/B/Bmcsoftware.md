# Bmcsoftware


```text
simpleicons-5/B/Bmcsoftware
```

```text
include('simpleicons-5/B/Bmcsoftware')
```



| Illustration | Bmcsoftware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bmcsoftware.png) | ![illustration for Bmcsoftware](../../simpleicons-5/B/Bmcsoftware.Local.png) |




## Bmcsoftware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bmcsoftware
include('simpleicons-5/B/Bmcsoftware')

' renders the element
Bmcsoftware('Bmcsoftware', 'Bmcsoftware', 'an optional tech label')
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

' loads the Item which embeds the element Bmcsoftware
include('simpleicons-5/B/Bmcsoftware')

' renders the element
Bmcsoftware('Bmcsoftware', 'Bmcsoftware', 'an optional tech label')
@enduml
```

