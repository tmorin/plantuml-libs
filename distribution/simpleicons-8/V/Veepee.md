# Veepee


```text
simpleicons-8/V/Veepee
```

```text
include('simpleicons-8/V/Veepee')
```



| Illustration | Veepee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Veepee.png) | ![illustration for Veepee](../../simpleicons-8/V/Veepee.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Veepee
include('simpleicons-8/V/Veepee')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Veepee
include('simpleicons-8/V/Veepee')

' renders the element
Veepee('Veepee', 'Veepee', 'an optional tech label', 'an optional description')
@enduml
```

