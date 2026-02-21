# Tesla


```text
simpleicons/T/Tesla
```

```text
include('simpleicons/T/Tesla')
```



| Illustration | Tesla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tesla.png) | ![illustration for Tesla](../../simpleicons/T/Tesla.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TeslaXs>`
- `<$TeslaSm>`
- `<$TeslaMd>`
- `<$TeslaLg>`





## Tesla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tesla
include('simpleicons/T/Tesla')

' renders the element
Tesla('Tesla', 'Tesla', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tesla
include('simpleicons/T/Tesla')

' renders the element
Tesla('Tesla', 'Tesla', 'an optional tech label', 'an optional description')
@enduml
```

