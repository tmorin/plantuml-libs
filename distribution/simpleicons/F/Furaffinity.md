# Furaffinity


```text
simpleicons/F/Furaffinity
```

```text
include('simpleicons/F/Furaffinity')
```



| Illustration | Furaffinity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Furaffinity.png) | ![illustration for Furaffinity](../../simpleicons/F/Furaffinity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FuraffinityXs>`
- `<$FuraffinitySm>`
- `<$FuraffinityMd>`
- `<$FuraffinityLg>`





## Furaffinity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Furaffinity
include('simpleicons/F/Furaffinity')

' renders the element
Furaffinity('Furaffinity', 'Furaffinity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Furaffinity
include('simpleicons/F/Furaffinity')

' renders the element
Furaffinity('Furaffinity', 'Furaffinity', 'an optional tech label', 'an optional description')
@enduml
```

