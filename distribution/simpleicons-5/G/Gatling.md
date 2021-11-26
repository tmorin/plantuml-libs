# Gatling


```text
simpleicons-5/G/Gatling
```

```text
include('simpleicons-5/G/Gatling')
```



| Illustration | Gatling |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gatling.png) | ![illustration for Gatling](../../simpleicons-5/G/Gatling.Local.png) |




## Gatling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gatling
include('simpleicons-5/G/Gatling')

' renders the element
Gatling('Gatling', 'Gatling', 'an optional tech label')
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

' loads the Item which embeds the element Gatling
include('simpleicons-5/G/Gatling')

' renders the element
Gatling('Gatling', 'Gatling', 'an optional tech label')
@enduml
```

