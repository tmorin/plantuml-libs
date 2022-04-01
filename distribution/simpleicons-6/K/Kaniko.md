# Kaniko


```text
simpleicons-6/K/Kaniko
```

```text
include('simpleicons-6/K/Kaniko')
```



| Illustration | Kaniko |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kaniko.png) | ![illustration for Kaniko](../../simpleicons-6/K/Kaniko.Local.png) |




## Kaniko

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kaniko
include('simpleicons-6/K/Kaniko')

' renders the element
Kaniko('Kaniko', 'Kaniko', 'an optional tech label')
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

' loads the Item which embeds the element Kaniko
include('simpleicons-6/K/Kaniko')

' renders the element
Kaniko('Kaniko', 'Kaniko', 'an optional tech label')
@enduml
```

