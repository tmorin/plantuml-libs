# Bmcsoftware


```text
simpleicons-7/B/Bmcsoftware
```

```text
include('simpleicons-7/B/Bmcsoftware')
```



| Illustration | Bmcsoftware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bmcsoftware.png) | ![illustration for Bmcsoftware](../../simpleicons-7/B/Bmcsoftware.Local.png) |




## Bmcsoftware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bmcsoftware
include('simpleicons-7/B/Bmcsoftware')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bmcsoftware
include('simpleicons-7/B/Bmcsoftware')

' renders the element
Bmcsoftware('Bmcsoftware', 'Bmcsoftware', 'an optional tech label')
@enduml
```

