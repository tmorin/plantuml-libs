# Chrysler


```text
simpleicons-6/C/Chrysler
```

```text
include('simpleicons-6/C/Chrysler')
```



| Illustration | Chrysler |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Chrysler.png) | ![illustration for Chrysler](../../simpleicons-6/C/Chrysler.Local.png) |




## Chrysler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Chrysler
include('simpleicons-6/C/Chrysler')

' renders the element
Chrysler('Chrysler', 'Chrysler', 'an optional tech label')
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

' loads the Item which embeds the element Chrysler
include('simpleicons-6/C/Chrysler')

' renders the element
Chrysler('Chrysler', 'Chrysler', 'an optional tech label')
@enduml
```

