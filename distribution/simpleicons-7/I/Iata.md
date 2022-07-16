# Iata


```text
simpleicons-7/I/Iata
```

```text
include('simpleicons-7/I/Iata')
```



| Illustration | Iata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Iata.png) | ![illustration for Iata](../../simpleicons-7/I/Iata.Local.png) |




## Iata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Iata
include('simpleicons-7/I/Iata')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Iata
include('simpleicons-7/I/Iata')

' renders the element
Iata('Iata', 'Iata', 'an optional tech label')
@enduml
```

