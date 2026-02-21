# Linkfire


```text
simpleicons/L/Linkfire
```

```text
include('simpleicons/L/Linkfire')
```



| Illustration | Linkfire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Linkfire.png) | ![illustration for Linkfire](../../simpleicons/L/Linkfire.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinkfireXs>`
- `<$LinkfireSm>`
- `<$LinkfireMd>`
- `<$LinkfireLg>`





## Linkfire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Linkfire
include('simpleicons/L/Linkfire')

' renders the element
Linkfire('Linkfire', 'Linkfire', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Linkfire
include('simpleicons/L/Linkfire')

' renders the element
Linkfire('Linkfire', 'Linkfire', 'an optional tech label', 'an optional description')
@enduml
```

