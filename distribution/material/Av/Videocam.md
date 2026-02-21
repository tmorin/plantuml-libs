# Videocam


```text
material/Av/Videocam
```

```text
include('material/Av/Videocam')
```



| Illustration | Videocam |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Videocam.png) | ![illustration for Videocam](../../material/Av/Videocam.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VideocamXs>`
- `<$VideocamSm>`
- `<$VideocamMd>`
- `<$VideocamLg>`





## Videocam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Videocam
include('material/Av/Videocam')

' renders the element
Videocam('Videocam', 'Videocam', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Videocam
include('material/Av/Videocam')

' renders the element
Videocam('Videocam', 'Videocam', 'an optional tech label', 'an optional description')
@enduml
```

