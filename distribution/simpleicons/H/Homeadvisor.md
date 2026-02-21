# Homeadvisor


```text
simpleicons/H/Homeadvisor
```

```text
include('simpleicons/H/Homeadvisor')
```



| Illustration | Homeadvisor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Homeadvisor.png) | ![illustration for Homeadvisor](../../simpleicons/H/Homeadvisor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomeadvisorXs>`
- `<$HomeadvisorSm>`
- `<$HomeadvisorMd>`
- `<$HomeadvisorLg>`





## Homeadvisor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Homeadvisor
include('simpleicons/H/Homeadvisor')

' renders the element
Homeadvisor('Homeadvisor', 'Homeadvisor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Homeadvisor
include('simpleicons/H/Homeadvisor')

' renders the element
Homeadvisor('Homeadvisor', 'Homeadvisor', 'an optional tech label', 'an optional description')
@enduml
```

