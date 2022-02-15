# Photobucket


```text
simpleicons-6/P/Photobucket
```

```text
include('simpleicons-6/P/Photobucket')
```



| Illustration | Photobucket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Photobucket.png) | ![illustration for Photobucket](../../simpleicons-6/P/Photobucket.Local.png) |




## Photobucket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Photobucket
include('simpleicons-6/P/Photobucket')

' renders the element
Photobucket('Photobucket', 'Photobucket', 'an optional tech label')
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

' loads the Item which embeds the element Photobucket
include('simpleicons-6/P/Photobucket')

' renders the element
Photobucket('Photobucket', 'Photobucket', 'an optional tech label')
@enduml
```

