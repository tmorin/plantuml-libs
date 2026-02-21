# Startdotgg


```text
simpleicons/S/Startdotgg
```

```text
include('simpleicons/S/Startdotgg')
```



| Illustration | Startdotgg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Startdotgg.png) | ![illustration for Startdotgg](../../simpleicons/S/Startdotgg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StartdotggXs>`
- `<$StartdotggSm>`
- `<$StartdotggMd>`
- `<$StartdotggLg>`





## Startdotgg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Startdotgg
include('simpleicons/S/Startdotgg')

' renders the element
Startdotgg('Startdotgg', 'Startdotgg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Startdotgg
include('simpleicons/S/Startdotgg')

' renders the element
Startdotgg('Startdotgg', 'Startdotgg', 'an optional tech label', 'an optional description')
@enduml
```

