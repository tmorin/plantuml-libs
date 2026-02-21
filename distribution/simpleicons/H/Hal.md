# Hal


```text
simpleicons/H/Hal
```

```text
include('simpleicons/H/Hal')
```



| Illustration | Hal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hal.png) | ![illustration for Hal](../../simpleicons/H/Hal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HalXs>`
- `<$HalSm>`
- `<$HalMd>`
- `<$HalLg>`





## Hal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hal
include('simpleicons/H/Hal')

' renders the element
Hal('Hal', 'Hal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hal
include('simpleicons/H/Hal')

' renders the element
Hal('Hal', 'Hal', 'an optional tech label', 'an optional description')
@enduml
```

