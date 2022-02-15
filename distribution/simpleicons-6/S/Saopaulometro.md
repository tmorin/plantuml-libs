# Saopaulometro


```text
simpleicons-6/S/Saopaulometro
```

```text
include('simpleicons-6/S/Saopaulometro')
```



| Illustration | Saopaulometro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Saopaulometro.png) | ![illustration for Saopaulometro](../../simpleicons-6/S/Saopaulometro.Local.png) |




## Saopaulometro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Saopaulometro
include('simpleicons-6/S/Saopaulometro')

' renders the element
Saopaulometro('Saopaulometro', 'Saopaulometro', 'an optional tech label')
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

' loads the Item which embeds the element Saopaulometro
include('simpleicons-6/S/Saopaulometro')

' renders the element
Saopaulometro('Saopaulometro', 'Saopaulometro', 'an optional tech label')
@enduml
```

