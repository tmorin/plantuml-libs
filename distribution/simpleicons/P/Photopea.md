# Photopea


```text
simpleicons/P/Photopea
```

```text
include('simpleicons/P/Photopea')
```



| Illustration | Photopea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Photopea.png) | ![illustration for Photopea](../../simpleicons/P/Photopea.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhotopeaXs>`
- `<$PhotopeaSm>`
- `<$PhotopeaMd>`
- `<$PhotopeaLg>`





## Photopea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Photopea
include('simpleicons/P/Photopea')

' renders the element
Photopea('Photopea', 'Photopea', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Photopea
include('simpleicons/P/Photopea')

' renders the element
Photopea('Photopea', 'Photopea', 'an optional tech label', 'an optional description')
@enduml
```

