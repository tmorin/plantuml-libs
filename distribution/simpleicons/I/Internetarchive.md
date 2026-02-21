# Internetarchive


```text
simpleicons/I/Internetarchive
```

```text
include('simpleicons/I/Internetarchive')
```



| Illustration | Internetarchive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Internetarchive.png) | ![illustration for Internetarchive](../../simpleicons/I/Internetarchive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InternetarchiveXs>`
- `<$InternetarchiveSm>`
- `<$InternetarchiveMd>`
- `<$InternetarchiveLg>`





## Internetarchive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Internetarchive
include('simpleicons/I/Internetarchive')

' renders the element
Internetarchive('Internetarchive', 'Internetarchive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Internetarchive
include('simpleicons/I/Internetarchive')

' renders the element
Internetarchive('Internetarchive', 'Internetarchive', 'an optional tech label', 'an optional description')
@enduml
```

