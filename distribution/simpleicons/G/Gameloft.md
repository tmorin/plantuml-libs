# Gameloft


```text
simpleicons/G/Gameloft
```

```text
include('simpleicons/G/Gameloft')
```



| Illustration | Gameloft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gameloft.png) | ![illustration for Gameloft](../../simpleicons/G/Gameloft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GameloftXs>`
- `<$GameloftSm>`
- `<$GameloftMd>`
- `<$GameloftLg>`





## Gameloft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gameloft
include('simpleicons/G/Gameloft')

' renders the element
Gameloft('Gameloft', 'Gameloft', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gameloft
include('simpleicons/G/Gameloft')

' renders the element
Gameloft('Gameloft', 'Gameloft', 'an optional tech label', 'an optional description')
@enduml
```

