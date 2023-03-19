# Gamedeveloper


```text
simpleicons-8/G/Gamedeveloper
```

```text
include('simpleicons-8/G/Gamedeveloper')
```



| Illustration | Gamedeveloper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gamedeveloper.png) | ![illustration for Gamedeveloper](../../simpleicons-8/G/Gamedeveloper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GamedeveloperXs>`
- `<$GamedeveloperSm>`
- `<$GamedeveloperMd>`
- `<$GamedeveloperLg>`





## Gamedeveloper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gamedeveloper
include('simpleicons-8/G/Gamedeveloper')

' renders the element
Gamedeveloper('Gamedeveloper', 'Gamedeveloper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gamedeveloper
include('simpleicons-8/G/Gamedeveloper')

' renders the element
Gamedeveloper('Gamedeveloper', 'Gamedeveloper', 'an optional tech label', 'an optional description')
@enduml
```

