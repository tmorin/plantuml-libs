# Veepee


```text
simpleicons/V/Veepee
```

```text
include('simpleicons/V/Veepee')
```



| Illustration | Veepee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Veepee.png) | ![illustration for Veepee](../../simpleicons/V/Veepee.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VeepeeXs>`
- `<$VeepeeSm>`
- `<$VeepeeMd>`
- `<$VeepeeLg>`





## Veepee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Veepee
include('simpleicons/V/Veepee')

' renders the element
Veepee('Veepee', 'Veepee', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Veepee
include('simpleicons/V/Veepee')

' renders the element
Veepee('Veepee', 'Veepee', 'an optional tech label', 'an optional description')
@enduml
```

