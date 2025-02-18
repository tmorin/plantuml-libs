# Playstation


```text
simpleicons-14/P/Playstation
```

```text
include('simpleicons-14/P/Playstation')
```



| Illustration | Playstation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Playstation.png) | ![illustration for Playstation](../../simpleicons-14/P/Playstation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaystationXs>`
- `<$PlaystationSm>`
- `<$PlaystationMd>`
- `<$PlaystationLg>`





## Playstation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Playstation
include('simpleicons-14/P/Playstation')

' renders the element
Playstation('Playstation', 'Playstation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Playstation
include('simpleicons-14/P/Playstation')

' renders the element
Playstation('Playstation', 'Playstation', 'an optional tech label', 'an optional description')
@enduml
```

