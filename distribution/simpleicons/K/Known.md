# Known


```text
simpleicons/K/Known
```

```text
include('simpleicons/K/Known')
```



| Illustration | Known |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Known.png) | ![illustration for Known](../../simpleicons/K/Known.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KnownXs>`
- `<$KnownSm>`
- `<$KnownMd>`
- `<$KnownLg>`





## Known

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Known
include('simpleicons/K/Known')

' renders the element
Known('Known', 'Known', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Known
include('simpleicons/K/Known')

' renders the element
Known('Known', 'Known', 'an optional tech label', 'an optional description')
@enduml
```

