# Activision


```text
simpleicons/A/Activision
```

```text
include('simpleicons/A/Activision')
```



| Illustration | Activision |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Activision.png) | ![illustration for Activision](../../simpleicons/A/Activision.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ActivisionXs>`
- `<$ActivisionSm>`
- `<$ActivisionMd>`
- `<$ActivisionLg>`





## Activision

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Activision
include('simpleicons/A/Activision')

' renders the element
Activision('Activision', 'Activision', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Activision
include('simpleicons/A/Activision')

' renders the element
Activision('Activision', 'Activision', 'an optional tech label', 'an optional description')
@enduml
```

