# Mozilla


```text
simpleicons-14/M/Mozilla
```

```text
include('simpleicons-14/M/Mozilla')
```



| Illustration | Mozilla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mozilla.png) | ![illustration for Mozilla](../../simpleicons-14/M/Mozilla.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MozillaXs>`
- `<$MozillaSm>`
- `<$MozillaMd>`
- `<$MozillaLg>`





## Mozilla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mozilla
include('simpleicons-14/M/Mozilla')

' renders the element
Mozilla('Mozilla', 'Mozilla', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mozilla
include('simpleicons-14/M/Mozilla')

' renders the element
Mozilla('Mozilla', 'Mozilla', 'an optional tech label', 'an optional description')
@enduml
```

