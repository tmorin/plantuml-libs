# Chrysler


```text
simpleicons-7/C/Chrysler
```

```text
include('simpleicons-7/C/Chrysler')
```



| Illustration | Chrysler |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Chrysler.png) | ![illustration for Chrysler](../../simpleicons-7/C/Chrysler.Local.png) |




## Chrysler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chrysler
include('simpleicons-7/C/Chrysler')

' renders the element
Chrysler('Chrysler', 'Chrysler', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chrysler
include('simpleicons-7/C/Chrysler')

' renders the element
Chrysler('Chrysler', 'Chrysler', 'an optional tech label', 'an optional description')
@enduml
```

