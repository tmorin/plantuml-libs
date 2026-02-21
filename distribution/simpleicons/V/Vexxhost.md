# Vexxhost


```text
simpleicons/V/Vexxhost
```

```text
include('simpleicons/V/Vexxhost')
```



| Illustration | Vexxhost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vexxhost.png) | ![illustration for Vexxhost](../../simpleicons/V/Vexxhost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VexxhostXs>`
- `<$VexxhostSm>`
- `<$VexxhostMd>`
- `<$VexxhostLg>`





## Vexxhost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vexxhost
include('simpleicons/V/Vexxhost')

' renders the element
Vexxhost('Vexxhost', 'Vexxhost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vexxhost
include('simpleicons/V/Vexxhost')

' renders the element
Vexxhost('Vexxhost', 'Vexxhost', 'an optional tech label', 'an optional description')
@enduml
```

