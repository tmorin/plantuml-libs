# Zebratechnologies


```text
simpleicons-14/Z/Zebratechnologies
```

```text
include('simpleicons-14/Z/Zebratechnologies')
```



| Illustration | Zebratechnologies |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zebratechnologies.png) | ![illustration for Zebratechnologies](../../simpleicons-14/Z/Zebratechnologies.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zebratechnologies
include('simpleicons-14/Z/Zebratechnologies')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zebratechnologies
include('simpleicons-14/Z/Zebratechnologies')

' renders the element
Zebratechnologies('Zebratechnologies', 'Zebratechnologies', 'an optional tech label', 'an optional description')
@enduml
```

