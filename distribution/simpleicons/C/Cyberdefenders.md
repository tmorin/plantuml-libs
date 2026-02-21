# Cyberdefenders


```text
simpleicons/C/Cyberdefenders
```

```text
include('simpleicons/C/Cyberdefenders')
```



| Illustration | Cyberdefenders |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cyberdefenders.png) | ![illustration for Cyberdefenders](../../simpleicons/C/Cyberdefenders.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CyberdefendersXs>`
- `<$CyberdefendersSm>`
- `<$CyberdefendersMd>`
- `<$CyberdefendersLg>`





## Cyberdefenders

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cyberdefenders
include('simpleicons/C/Cyberdefenders')

' renders the element
Cyberdefenders('Cyberdefenders', 'Cyberdefenders', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cyberdefenders
include('simpleicons/C/Cyberdefenders')

' renders the element
Cyberdefenders('Cyberdefenders', 'Cyberdefenders', 'an optional tech label', 'an optional description')
@enduml
```

