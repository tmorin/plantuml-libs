# Zebratechnologies


```text
simpleicons/Z/Zebratechnologies
```

```text
include('simpleicons/Z/Zebratechnologies')
```



| Illustration | Zebratechnologies |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zebratechnologies.png) | ![illustration for Zebratechnologies](../../simpleicons/Z/Zebratechnologies.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZebratechnologiesXs>`
- `<$ZebratechnologiesSm>`
- `<$ZebratechnologiesMd>`
- `<$ZebratechnologiesLg>`





## Zebratechnologies

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zebratechnologies
include('simpleicons/Z/Zebratechnologies')

' renders the element
Zebratechnologies('Zebratechnologies', 'Zebratechnologies', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zebratechnologies
include('simpleicons/Z/Zebratechnologies')

' renders the element
Zebratechnologies('Zebratechnologies', 'Zebratechnologies', 'an optional tech label', 'an optional description')
@enduml
```

