# Nvidia


```text
simpleicons-7/N/Nvidia
```

```text
include('simpleicons-7/N/Nvidia')
```



| Illustration | Nvidia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nvidia.png) | ![illustration for Nvidia](../../simpleicons-7/N/Nvidia.Local.png) |




## Nvidia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nvidia
include('simpleicons-7/N/Nvidia')

' renders the element
Nvidia('Nvidia', 'Nvidia', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nvidia
include('simpleicons-7/N/Nvidia')

' renders the element
Nvidia('Nvidia', 'Nvidia', 'an optional tech label')
@enduml
```

