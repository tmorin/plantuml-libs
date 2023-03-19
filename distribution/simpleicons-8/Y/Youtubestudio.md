# Youtubestudio


```text
simpleicons-8/Y/Youtubestudio
```

```text
include('simpleicons-8/Y/Youtubestudio')
```



| Illustration | Youtubestudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Y/Youtubestudio.png) | ![illustration for Youtubestudio](../../simpleicons-8/Y/Youtubestudio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YoutubestudioXs>`
- `<$YoutubestudioSm>`
- `<$YoutubestudioMd>`
- `<$YoutubestudioLg>`





## Youtubestudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Youtubestudio
include('simpleicons-8/Y/Youtubestudio')

' renders the element
Youtubestudio('Youtubestudio', 'Youtubestudio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Youtubestudio
include('simpleicons-8/Y/Youtubestudio')

' renders the element
Youtubestudio('Youtubestudio', 'Youtubestudio', 'an optional tech label', 'an optional description')
@enduml
```

