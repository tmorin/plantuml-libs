# Nvidia


```text
simpleicons-5/N/Nvidia
```

```text
include('simpleicons-5/N/Nvidia')
```



| Illustration | Nvidia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nvidia.png) | ![illustration for Nvidia](../../simpleicons-5/N/Nvidia.Local.png) |




## Nvidia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nvidia
include('simpleicons-5/N/Nvidia')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nvidia
include('simpleicons-5/N/Nvidia')

' renders the element
Nvidia('Nvidia', 'Nvidia', 'an optional tech label')
@enduml
```

