# Podcastaddict


```text
simpleicons-5/P/Podcastaddict
```

```text
include('simpleicons-5/P/Podcastaddict')
```



| Illustration | Podcastaddict |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Podcastaddict.png) | ![illustration for Podcastaddict](../../simpleicons-5/P/Podcastaddict.Local.png) |




## Podcastaddict

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Podcastaddict
include('simpleicons-5/P/Podcastaddict')

' renders the element
Podcastaddict('Podcastaddict', 'Podcastaddict', 'an optional tech label')
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

' loads the Item which embeds the element Podcastaddict
include('simpleicons-5/P/Podcastaddict')

' renders the element
Podcastaddict('Podcastaddict', 'Podcastaddict', 'an optional tech label')
@enduml
```

