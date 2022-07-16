# Kubuntu


```text
simpleicons-7/K/Kubuntu
```

```text
include('simpleicons-7/K/Kubuntu')
```



| Illustration | Kubuntu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Kubuntu.png) | ![illustration for Kubuntu](../../simpleicons-7/K/Kubuntu.Local.png) |




## Kubuntu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kubuntu
include('simpleicons-7/K/Kubuntu')

' renders the element
Kubuntu('Kubuntu', 'Kubuntu', 'an optional tech label')
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

' loads the Item which embeds the element Kubuntu
include('simpleicons-7/K/Kubuntu')

' renders the element
Kubuntu('Kubuntu', 'Kubuntu', 'an optional tech label')
@enduml
```

