# Abbrobotstudio


```text
simpleicons-8/A/Abbrobotstudio
```

```text
include('simpleicons-8/A/Abbrobotstudio')
```



| Illustration | Abbrobotstudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Abbrobotstudio.png) | ![illustration for Abbrobotstudio](../../simpleicons-8/A/Abbrobotstudio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AbbrobotstudioXs>`
- `<$AbbrobotstudioSm>`
- `<$AbbrobotstudioMd>`
- `<$AbbrobotstudioLg>`





## Abbrobotstudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Abbrobotstudio
include('simpleicons-8/A/Abbrobotstudio')

' renders the element
Abbrobotstudio('Abbrobotstudio', 'Abbrobotstudio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Abbrobotstudio
include('simpleicons-8/A/Abbrobotstudio')

' renders the element
Abbrobotstudio('Abbrobotstudio', 'Abbrobotstudio', 'an optional tech label', 'an optional description')
@enduml
```

