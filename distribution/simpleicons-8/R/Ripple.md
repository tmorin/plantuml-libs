# Ripple


```text
simpleicons-8/R/Ripple
```

```text
include('simpleicons-8/R/Ripple')
```



| Illustration | Ripple |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Ripple.png) | ![illustration for Ripple](../../simpleicons-8/R/Ripple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RippleXs>`
- `<$RippleSm>`
- `<$RippleMd>`
- `<$RippleLg>`





## Ripple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ripple
include('simpleicons-8/R/Ripple')

' renders the element
Ripple('Ripple', 'Ripple', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ripple
include('simpleicons-8/R/Ripple')

' renders the element
Ripple('Ripple', 'Ripple', 'an optional tech label', 'an optional description')
@enduml
```

