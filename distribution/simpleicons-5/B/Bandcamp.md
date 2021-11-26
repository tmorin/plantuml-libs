# Bandcamp


```text
simpleicons-5/B/Bandcamp
```

```text
include('simpleicons-5/B/Bandcamp')
```



| Illustration | Bandcamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bandcamp.png) | ![illustration for Bandcamp](../../simpleicons-5/B/Bandcamp.Local.png) |




## Bandcamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bandcamp
include('simpleicons-5/B/Bandcamp')

' renders the element
Bandcamp('Bandcamp', 'Bandcamp', 'an optional tech label')
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

' loads the Item which embeds the element Bandcamp
include('simpleicons-5/B/Bandcamp')

' renders the element
Bandcamp('Bandcamp', 'Bandcamp', 'an optional tech label')
@enduml
```

