# Iata


```text
simpleicons-5/I/Iata
```

```text
include('simpleicons-5/I/Iata')
```



| Illustration | Iata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Iata.png) | ![illustration for Iata](../../simpleicons-5/I/Iata.Local.png) |




## Iata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Iata
include('simpleicons-5/I/Iata')

' renders the element
Iata('Iata', 'Iata', 'an optional tech label')
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

' loads the Item which embeds the element Iata
include('simpleicons-5/I/Iata')

' renders the element
Iata('Iata', 'Iata', 'an optional tech label')
@enduml
```

