# Kenmei


```text
simpleicons/K/Kenmei
```

```text
include('simpleicons/K/Kenmei')
```



| Illustration | Kenmei |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kenmei.png) | ![illustration for Kenmei](../../simpleicons/K/Kenmei.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KenmeiXs>`
- `<$KenmeiSm>`
- `<$KenmeiMd>`
- `<$KenmeiLg>`





## Kenmei

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kenmei
include('simpleicons/K/Kenmei')

' renders the element
Kenmei('Kenmei', 'Kenmei', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kenmei
include('simpleicons/K/Kenmei')

' renders the element
Kenmei('Kenmei', 'Kenmei', 'an optional tech label', 'an optional description')
@enduml
```

