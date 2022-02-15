# Activision


```text
simpleicons-6/A/Activision
```

```text
include('simpleicons-6/A/Activision')
```



| Illustration | Activision |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Activision.png) | ![illustration for Activision](../../simpleicons-6/A/Activision.Local.png) |




## Activision

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Activision
include('simpleicons-6/A/Activision')

' renders the element
Activision('Activision', 'Activision', 'an optional tech label')
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

' loads the Item which embeds the element Activision
include('simpleicons-6/A/Activision')

' renders the element
Activision('Activision', 'Activision', 'an optional tech label')
@enduml
```

