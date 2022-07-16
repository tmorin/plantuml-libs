# Dtube


```text
simpleicons-7/D/Dtube
```

```text
include('simpleicons-7/D/Dtube')
```



| Illustration | Dtube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dtube.png) | ![illustration for Dtube](../../simpleicons-7/D/Dtube.Local.png) |




## Dtube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dtube
include('simpleicons-7/D/Dtube')

' renders the element
Dtube('Dtube', 'Dtube', 'an optional tech label')
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

' loads the Item which embeds the element Dtube
include('simpleicons-7/D/Dtube')

' renders the element
Dtube('Dtube', 'Dtube', 'an optional tech label')
@enduml
```

