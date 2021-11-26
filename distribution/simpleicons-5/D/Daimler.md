# Daimler


```text
simpleicons-5/D/Daimler
```

```text
include('simpleicons-5/D/Daimler')
```



| Illustration | Daimler |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Daimler.png) | ![illustration for Daimler](../../simpleicons-5/D/Daimler.Local.png) |




## Daimler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Daimler
include('simpleicons-5/D/Daimler')

' renders the element
Daimler('Daimler', 'Daimler', 'an optional tech label')
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

' loads the Item which embeds the element Daimler
include('simpleicons-5/D/Daimler')

' renders the element
Daimler('Daimler', 'Daimler', 'an optional tech label')
@enduml
```

