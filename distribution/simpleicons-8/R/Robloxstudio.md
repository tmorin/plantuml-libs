# Robloxstudio


```text
simpleicons-8/R/Robloxstudio
```

```text
include('simpleicons-8/R/Robloxstudio')
```



| Illustration | Robloxstudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Robloxstudio.png) | ![illustration for Robloxstudio](../../simpleicons-8/R/Robloxstudio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RobloxstudioXs>`
- `<$RobloxstudioSm>`
- `<$RobloxstudioMd>`
- `<$RobloxstudioLg>`





## Robloxstudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Robloxstudio
include('simpleicons-8/R/Robloxstudio')

' renders the element
Robloxstudio('Robloxstudio', 'Robloxstudio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Robloxstudio
include('simpleicons-8/R/Robloxstudio')

' renders the element
Robloxstudio('Robloxstudio', 'Robloxstudio', 'an optional tech label', 'an optional description')
@enduml
```

