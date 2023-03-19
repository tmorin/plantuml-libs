# Nvidia


```text
simpleicons-8/N/Nvidia
```

```text
include('simpleicons-8/N/Nvidia')
```



| Illustration | Nvidia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Nvidia.png) | ![illustration for Nvidia](../../simpleicons-8/N/Nvidia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NvidiaXs>`
- `<$NvidiaSm>`
- `<$NvidiaMd>`
- `<$NvidiaLg>`





## Nvidia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Nvidia
include('simpleicons-8/N/Nvidia')

' renders the element
Nvidia('Nvidia', 'Nvidia', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Nvidia
include('simpleicons-8/N/Nvidia')

' renders the element
Nvidia('Nvidia', 'Nvidia', 'an optional tech label', 'an optional description')
@enduml
```

