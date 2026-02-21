# Rainyun


```text
simpleicons/R/Rainyun
```

```text
include('simpleicons/R/Rainyun')
```



| Illustration | Rainyun |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rainyun.png) | ![illustration for Rainyun](../../simpleicons/R/Rainyun.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RainyunXs>`
- `<$RainyunSm>`
- `<$RainyunMd>`
- `<$RainyunLg>`





## Rainyun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rainyun
include('simpleicons/R/Rainyun')

' renders the element
Rainyun('Rainyun', 'Rainyun', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rainyun
include('simpleicons/R/Rainyun')

' renders the element
Rainyun('Rainyun', 'Rainyun', 'an optional tech label', 'an optional description')
@enduml
```

