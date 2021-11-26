# Rhinoceros


```text
simpleicons-5/R/Rhinoceros
```

```text
include('simpleicons-5/R/Rhinoceros')
```



| Illustration | Rhinoceros |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Rhinoceros.png) | ![illustration for Rhinoceros](../../simpleicons-5/R/Rhinoceros.Local.png) |




## Rhinoceros

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rhinoceros
include('simpleicons-5/R/Rhinoceros')

' renders the element
Rhinoceros('Rhinoceros', 'Rhinoceros', 'an optional tech label')
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

' loads the Item which embeds the element Rhinoceros
include('simpleicons-5/R/Rhinoceros')

' renders the element
Rhinoceros('Rhinoceros', 'Rhinoceros', 'an optional tech label')
@enduml
```

