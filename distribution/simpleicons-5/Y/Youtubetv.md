# Youtubetv


```text
simpleicons-5/Y/Youtubetv
```

```text
include('simpleicons-5/Y/Youtubetv')
```



| Illustration | Youtubetv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Y/Youtubetv.png) | ![illustration for Youtubetv](../../simpleicons-5/Y/Youtubetv.Local.png) |




## Youtubetv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Youtubetv
include('simpleicons-5/Y/Youtubetv')

' renders the element
Youtubetv('Youtubetv', 'Youtubetv', 'an optional tech label')
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

' loads the Item which embeds the element Youtubetv
include('simpleicons-5/Y/Youtubetv')

' renders the element
Youtubetv('Youtubetv', 'Youtubetv', 'an optional tech label')
@enduml
```

