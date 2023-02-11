# Matomo


```text
simpleicons-8/M/Matomo
```

```text
include('simpleicons-8/M/Matomo')
```



| Illustration | Matomo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Matomo.png) | ![illustration for Matomo](../../simpleicons-8/M/Matomo.Local.png) |




## Matomo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Matomo
include('simpleicons-8/M/Matomo')

' renders the element
Matomo('Matomo', 'Matomo', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Matomo
include('simpleicons-8/M/Matomo')

' renders the element
Matomo('Matomo', 'Matomo', 'an optional tech label', 'an optional description')
@enduml
```

