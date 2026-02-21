# Fox


```text
simpleicons/F/Fox
```

```text
include('simpleicons/F/Fox')
```



| Illustration | Fox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fox.png) | ![illustration for Fox](../../simpleicons/F/Fox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FoxXs>`
- `<$FoxSm>`
- `<$FoxMd>`
- `<$FoxLg>`





## Fox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fox
include('simpleicons/F/Fox')

' renders the element
Fox('Fox', 'Fox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fox
include('simpleicons/F/Fox')

' renders the element
Fox('Fox', 'Fox', 'an optional tech label', 'an optional description')
@enduml
```

