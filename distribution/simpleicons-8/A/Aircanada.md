# Aircanada


```text
simpleicons-8/A/Aircanada
```

```text
include('simpleicons-8/A/Aircanada')
```



| Illustration | Aircanada |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Aircanada.png) | ![illustration for Aircanada](../../simpleicons-8/A/Aircanada.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AircanadaXs>`
- `<$AircanadaSm>`
- `<$AircanadaMd>`
- `<$AircanadaLg>`





## Aircanada

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Aircanada
include('simpleicons-8/A/Aircanada')

' renders the element
Aircanada('Aircanada', 'Aircanada', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aircanada
include('simpleicons-8/A/Aircanada')

' renders the element
Aircanada('Aircanada', 'Aircanada', 'an optional tech label', 'an optional description')
@enduml
```

