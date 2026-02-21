# Ted


```text
simpleicons/T/Ted
```

```text
include('simpleicons/T/Ted')
```



| Illustration | Ted |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Ted.png) | ![illustration for Ted](../../simpleicons/T/Ted.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TedXs>`
- `<$TedSm>`
- `<$TedMd>`
- `<$TedLg>`





## Ted

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ted
include('simpleicons/T/Ted')

' renders the element
Ted('Ted', 'Ted', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ted
include('simpleicons/T/Ted')

' renders the element
Ted('Ted', 'Ted', 'an optional tech label', 'an optional description')
@enduml
```

