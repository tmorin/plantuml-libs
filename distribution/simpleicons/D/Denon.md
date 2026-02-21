# Denon


```text
simpleicons/D/Denon
```

```text
include('simpleicons/D/Denon')
```



| Illustration | Denon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Denon.png) | ![illustration for Denon](../../simpleicons/D/Denon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DenonXs>`
- `<$DenonSm>`
- `<$DenonMd>`
- `<$DenonLg>`





## Denon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Denon
include('simpleicons/D/Denon')

' renders the element
Denon('Denon', 'Denon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Denon
include('simpleicons/D/Denon')

' renders the element
Denon('Denon', 'Denon', 'an optional tech label', 'an optional description')
@enduml
```

