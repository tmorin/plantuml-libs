# Youtubestudio


```text
simpleicons-7/Y/Youtubestudio
```

```text
include('simpleicons-7/Y/Youtubestudio')
```



| Illustration | Youtubestudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Y/Youtubestudio.png) | ![illustration for Youtubestudio](../../simpleicons-7/Y/Youtubestudio.Local.png) |




## Youtubestudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Youtubestudio
include('simpleicons-7/Y/Youtubestudio')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Youtubestudio
include('simpleicons-7/Y/Youtubestudio')

' renders the element
Youtubestudio('Youtubestudio', 'Youtubestudio', 'an optional tech label', 'an optional description')
@enduml
```

