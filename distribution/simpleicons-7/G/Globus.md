# Globus


```text
simpleicons-7/G/Globus
```

```text
include('simpleicons-7/G/Globus')
```



| Illustration | Globus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Globus.png) | ![illustration for Globus](../../simpleicons-7/G/Globus.Local.png) |




## Globus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Globus
include('simpleicons-7/G/Globus')

' renders the element
Globus('Globus', 'Globus', 'an optional tech label')
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

' loads the Item which embeds the element Globus
include('simpleicons-7/G/Globus')

' renders the element
Globus('Globus', 'Globus', 'an optional tech label')
@enduml
```

