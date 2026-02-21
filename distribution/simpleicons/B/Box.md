# Box


```text
simpleicons/B/Box
```

```text
include('simpleicons/B/Box')
```



| Illustration | Box |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Box.png) | ![illustration for Box](../../simpleicons/B/Box.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoxXs>`
- `<$BoxSm>`
- `<$BoxMd>`
- `<$BoxLg>`





## Box

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Box
include('simpleicons/B/Box')

' renders the element
Box('Box', 'Box', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Box
include('simpleicons/B/Box')

' renders the element
Box('Box', 'Box', 'an optional tech label', 'an optional description')
@enduml
```

