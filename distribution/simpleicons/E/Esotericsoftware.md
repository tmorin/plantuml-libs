# Esotericsoftware


```text
simpleicons/E/Esotericsoftware
```

```text
include('simpleicons/E/Esotericsoftware')
```



| Illustration | Esotericsoftware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Esotericsoftware.png) | ![illustration for Esotericsoftware](../../simpleicons/E/Esotericsoftware.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EsotericsoftwareXs>`
- `<$EsotericsoftwareSm>`
- `<$EsotericsoftwareMd>`
- `<$EsotericsoftwareLg>`





## Esotericsoftware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Esotericsoftware
include('simpleicons/E/Esotericsoftware')

' renders the element
Esotericsoftware('Esotericsoftware', 'Esotericsoftware', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Esotericsoftware
include('simpleicons/E/Esotericsoftware')

' renders the element
Esotericsoftware('Esotericsoftware', 'Esotericsoftware', 'an optional tech label', 'an optional description')
@enduml
```

