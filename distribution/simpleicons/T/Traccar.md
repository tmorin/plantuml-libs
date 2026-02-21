# Traccar


```text
simpleicons/T/Traccar
```

```text
include('simpleicons/T/Traccar')
```



| Illustration | Traccar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Traccar.png) | ![illustration for Traccar](../../simpleicons/T/Traccar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TraccarXs>`
- `<$TraccarSm>`
- `<$TraccarMd>`
- `<$TraccarLg>`





## Traccar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Traccar
include('simpleicons/T/Traccar')

' renders the element
Traccar('Traccar', 'Traccar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Traccar
include('simpleicons/T/Traccar')

' renders the element
Traccar('Traccar', 'Traccar', 'an optional tech label', 'an optional description')
@enduml
```

