# Androidstudio


```text
simpleicons-7/A/Androidstudio
```

```text
include('simpleicons-7/A/Androidstudio')
```



| Illustration | Androidstudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Androidstudio.png) | ![illustration for Androidstudio](../../simpleicons-7/A/Androidstudio.Local.png) |




## Androidstudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Androidstudio
include('simpleicons-7/A/Androidstudio')

' renders the element
Androidstudio('Androidstudio', 'Androidstudio', 'an optional tech label')
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

' loads the Item which embeds the element Androidstudio
include('simpleicons-7/A/Androidstudio')

' renders the element
Androidstudio('Androidstudio', 'Androidstudio', 'an optional tech label')
@enduml
```

