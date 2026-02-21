# Arc


```text
simpleicons/A/Arc
```

```text
include('simpleicons/A/Arc')
```



| Illustration | Arc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Arc.png) | ![illustration for Arc](../../simpleicons/A/Arc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArcXs>`
- `<$ArcSm>`
- `<$ArcMd>`
- `<$ArcLg>`





## Arc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Arc
include('simpleicons/A/Arc')

' renders the element
Arc('Arc', 'Arc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Arc
include('simpleicons/A/Arc')

' renders the element
Arc('Arc', 'Arc', 'an optional tech label', 'an optional description')
@enduml
```

