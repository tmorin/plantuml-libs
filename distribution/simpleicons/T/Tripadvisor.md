# Tripadvisor


```text
simpleicons/T/Tripadvisor
```

```text
include('simpleicons/T/Tripadvisor')
```



| Illustration | Tripadvisor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tripadvisor.png) | ![illustration for Tripadvisor](../../simpleicons/T/Tripadvisor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TripadvisorXs>`
- `<$TripadvisorSm>`
- `<$TripadvisorMd>`
- `<$TripadvisorLg>`





## Tripadvisor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tripadvisor
include('simpleicons/T/Tripadvisor')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tripadvisor
include('simpleicons/T/Tripadvisor')

' renders the element
Tripadvisor('Tripadvisor', 'Tripadvisor', 'an optional tech label', 'an optional description')
@enduml
```

