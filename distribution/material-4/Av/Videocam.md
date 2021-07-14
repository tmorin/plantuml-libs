# Videocam


```text
material-4/Av/Videocam
```

```text
include('material-4/Av/Videocam')
```



| Illustration | Videocam |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Videocam.png) | ![illustration for Videocam](../../material-4/Av/Videocam.Local.png) |




## Videocam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Videocam
include('material-4/Av/Videocam')

' renders the element
Videocam('Videocam', 'Videocam', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Videocam
include('material-4/Av/Videocam')

' renders the element
Videocam('Videocam', 'Videocam', 'an optional tech label')
@enduml
```

