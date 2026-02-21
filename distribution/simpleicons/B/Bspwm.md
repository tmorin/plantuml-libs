# Bspwm


```text
simpleicons/B/Bspwm
```

```text
include('simpleicons/B/Bspwm')
```



| Illustration | Bspwm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bspwm.png) | ![illustration for Bspwm](../../simpleicons/B/Bspwm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BspwmXs>`
- `<$BspwmSm>`
- `<$BspwmMd>`
- `<$BspwmLg>`





## Bspwm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bspwm
include('simpleicons/B/Bspwm')

' renders the element
Bspwm('Bspwm', 'Bspwm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bspwm
include('simpleicons/B/Bspwm')

' renders the element
Bspwm('Bspwm', 'Bspwm', 'an optional tech label', 'an optional description')
@enduml
```

