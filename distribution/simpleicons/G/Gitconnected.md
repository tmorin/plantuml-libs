# Gitconnected


```text
simpleicons/G/Gitconnected
```

```text
include('simpleicons/G/Gitconnected')
```



| Illustration | Gitconnected |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gitconnected.png) | ![illustration for Gitconnected](../../simpleicons/G/Gitconnected.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GitconnectedXs>`
- `<$GitconnectedSm>`
- `<$GitconnectedMd>`
- `<$GitconnectedLg>`





## Gitconnected

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gitconnected
include('simpleicons/G/Gitconnected')

' renders the element
Gitconnected('Gitconnected', 'Gitconnected', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitconnected
include('simpleicons/G/Gitconnected')

' renders the element
Gitconnected('Gitconnected', 'Gitconnected', 'an optional tech label', 'an optional description')
@enduml
```

