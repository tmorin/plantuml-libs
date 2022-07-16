# Podcastaddict


```text
simpleicons-7/P/Podcastaddict
```

```text
include('simpleicons-7/P/Podcastaddict')
```



| Illustration | Podcastaddict |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Podcastaddict.png) | ![illustration for Podcastaddict](../../simpleicons-7/P/Podcastaddict.Local.png) |




## Podcastaddict

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Podcastaddict
include('simpleicons-7/P/Podcastaddict')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Podcastaddict
include('simpleicons-7/P/Podcastaddict')

' renders the element
Podcastaddict('Podcastaddict', 'Podcastaddict', 'an optional tech label')
@enduml
```

