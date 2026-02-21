# Untappd


```text
simpleicons/U/Untappd
```

```text
include('simpleicons/U/Untappd')
```



| Illustration | Untappd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Untappd.png) | ![illustration for Untappd](../../simpleicons/U/Untappd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UntappdXs>`
- `<$UntappdSm>`
- `<$UntappdMd>`
- `<$UntappdLg>`





## Untappd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Untappd
include('simpleicons/U/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Untappd
include('simpleicons/U/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label', 'an optional description')
@enduml
```

