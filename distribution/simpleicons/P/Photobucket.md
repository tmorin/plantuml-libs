# Photobucket


```text
simpleicons/P/Photobucket
```

```text
include('simpleicons/P/Photobucket')
```



| Illustration | Photobucket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Photobucket.png) | ![illustration for Photobucket](../../simpleicons/P/Photobucket.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhotobucketXs>`
- `<$PhotobucketSm>`
- `<$PhotobucketMd>`
- `<$PhotobucketLg>`





## Photobucket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Photobucket
include('simpleicons/P/Photobucket')

' renders the element
Photobucket('Photobucket', 'Photobucket', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Photobucket
include('simpleicons/P/Photobucket')

' renders the element
Photobucket('Photobucket', 'Photobucket', 'an optional tech label', 'an optional description')
@enduml
```

