# Matomo


```text
simpleicons-5/M/Matomo
```

```text
include('simpleicons-5/M/Matomo')
```



| Illustration | Matomo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Matomo.png) | ![illustration for Matomo](../../simpleicons-5/M/Matomo.Local.png) |




## Matomo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Matomo
include('simpleicons-5/M/Matomo')

' renders the element
Matomo('Matomo', 'Matomo', 'an optional tech label')
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

' loads the Item which embeds the element Matomo
include('simpleicons-5/M/Matomo')

' renders the element
Matomo('Matomo', 'Matomo', 'an optional tech label')
@enduml
```

