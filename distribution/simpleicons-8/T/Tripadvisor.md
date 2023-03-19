# Tripadvisor


```text
simpleicons-8/T/Tripadvisor
```

```text
include('simpleicons-8/T/Tripadvisor')
```



| Illustration | Tripadvisor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tripadvisor.png) | ![illustration for Tripadvisor](../../simpleicons-8/T/Tripadvisor.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tripadvisor
include('simpleicons-8/T/Tripadvisor')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tripadvisor
include('simpleicons-8/T/Tripadvisor')

' renders the element
Tripadvisor('Tripadvisor', 'Tripadvisor', 'an optional tech label', 'an optional description')
@enduml
```

