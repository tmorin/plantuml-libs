# Freetube


```text
simpleicons/F/Freetube
```

```text
include('simpleicons/F/Freetube')
```



| Illustration | Freetube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Freetube.png) | ![illustration for Freetube](../../simpleicons/F/Freetube.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreetubeXs>`
- `<$FreetubeSm>`
- `<$FreetubeMd>`
- `<$FreetubeLg>`





## Freetube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Freetube
include('simpleicons/F/Freetube')

' renders the element
Freetube('Freetube', 'Freetube', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Freetube
include('simpleicons/F/Freetube')

' renders the element
Freetube('Freetube', 'Freetube', 'an optional tech label', 'an optional description')
@enduml
```

