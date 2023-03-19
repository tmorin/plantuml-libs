# Untappd


```text
simpleicons-8/U/Untappd
```

```text
include('simpleicons-8/U/Untappd')
```



| Illustration | Untappd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/U/Untappd.png) | ![illustration for Untappd](../../simpleicons-8/U/Untappd.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Untappd
include('simpleicons-8/U/Untappd')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Untappd
include('simpleicons-8/U/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label', 'an optional description')
@enduml
```

