# Applemusic


```text
simpleicons-7/A/Applemusic
```

```text
include('simpleicons-7/A/Applemusic')
```



| Illustration | Applemusic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Applemusic.png) | ![illustration for Applemusic](../../simpleicons-7/A/Applemusic.Local.png) |




## Applemusic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Applemusic
include('simpleicons-7/A/Applemusic')

' renders the element
Applemusic('Applemusic', 'Applemusic', 'an optional tech label')
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

' loads the Item which embeds the element Applemusic
include('simpleicons-7/A/Applemusic')

' renders the element
Applemusic('Applemusic', 'Applemusic', 'an optional tech label')
@enduml
```

