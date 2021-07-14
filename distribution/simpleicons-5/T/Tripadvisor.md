# Tripadvisor


```text
simpleicons-5/T/Tripadvisor
```

```text
include('simpleicons-5/T/Tripadvisor')
```



| Illustration | Tripadvisor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tripadvisor.png) | ![illustration for Tripadvisor](../../simpleicons-5/T/Tripadvisor.Local.png) |




## Tripadvisor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tripadvisor
include('simpleicons-5/T/Tripadvisor')

' renders the element
Tripadvisor('Tripadvisor', 'Tripadvisor', 'an optional tech label')
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

' loads the Item which embeds the element Tripadvisor
include('simpleicons-5/T/Tripadvisor')

' renders the element
Tripadvisor('Tripadvisor', 'Tripadvisor', 'an optional tech label')
@enduml
```

