# Tripadvisor


```text
simpleicons-7/T/Tripadvisor
```

```text
include('simpleicons-7/T/Tripadvisor')
```



| Illustration | Tripadvisor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tripadvisor.png) | ![illustration for Tripadvisor](../../simpleicons-7/T/Tripadvisor.Local.png) |




## Tripadvisor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tripadvisor
include('simpleicons-7/T/Tripadvisor')

' renders the element
Tripadvisor('Tripadvisor', 'Tripadvisor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tripadvisor
include('simpleicons-7/T/Tripadvisor')

' renders the element
Tripadvisor('Tripadvisor', 'Tripadvisor', 'an optional tech label', 'an optional description')
@enduml
```

