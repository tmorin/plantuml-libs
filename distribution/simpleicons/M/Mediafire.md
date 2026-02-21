# Mediafire


```text
simpleicons/M/Mediafire
```

```text
include('simpleicons/M/Mediafire')
```



| Illustration | Mediafire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mediafire.png) | ![illustration for Mediafire](../../simpleicons/M/Mediafire.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MediafireXs>`
- `<$MediafireSm>`
- `<$MediafireMd>`
- `<$MediafireLg>`





## Mediafire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mediafire
include('simpleicons/M/Mediafire')

' renders the element
Mediafire('Mediafire', 'Mediafire', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mediafire
include('simpleicons/M/Mediafire')

' renders the element
Mediafire('Mediafire', 'Mediafire', 'an optional tech label', 'an optional description')
@enduml
```

