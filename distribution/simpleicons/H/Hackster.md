# Hackster


```text
simpleicons/H/Hackster
```

```text
include('simpleicons/H/Hackster')
```



| Illustration | Hackster |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hackster.png) | ![illustration for Hackster](../../simpleicons/H/Hackster.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HacksterXs>`
- `<$HacksterSm>`
- `<$HacksterMd>`
- `<$HacksterLg>`





## Hackster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hackster
include('simpleicons/H/Hackster')

' renders the element
Hackster('Hackster', 'Hackster', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hackster
include('simpleicons/H/Hackster')

' renders the element
Hackster('Hackster', 'Hackster', 'an optional tech label', 'an optional description')
@enduml
```

