# Anilist


```text
simpleicons-7/A/Anilist
```

```text
include('simpleicons-7/A/Anilist')
```



| Illustration | Anilist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Anilist.png) | ![illustration for Anilist](../../simpleicons-7/A/Anilist.Local.png) |




## Anilist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Anilist
include('simpleicons-7/A/Anilist')

' renders the element
Anilist('Anilist', 'Anilist', 'an optional tech label')
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

' loads the Item which embeds the element Anilist
include('simpleicons-7/A/Anilist')

' renders the element
Anilist('Anilist', 'Anilist', 'an optional tech label')
@enduml
```

