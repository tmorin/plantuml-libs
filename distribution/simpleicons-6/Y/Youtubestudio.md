# Youtubestudio


```text
simpleicons-6/Y/Youtubestudio
```

```text
include('simpleicons-6/Y/Youtubestudio')
```



| Illustration | Youtubestudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Y/Youtubestudio.png) | ![illustration for Youtubestudio](../../simpleicons-6/Y/Youtubestudio.Local.png) |




## Youtubestudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Youtubestudio
include('simpleicons-6/Y/Youtubestudio')

' renders the element
Youtubestudio('Youtubestudio', 'Youtubestudio', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Youtubestudio
include('simpleicons-6/Y/Youtubestudio')

' renders the element
Youtubestudio('Youtubestudio', 'Youtubestudio', 'an optional tech label')
@enduml
```

