# Arc


```text
simpleicons-14/A/Arc
```

```text
include('simpleicons-14/A/Arc')
```



| Illustration | Arc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Arc.png) | ![illustration for Arc](../../simpleicons-14/A/Arc.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Arc
include('simpleicons-14/A/Arc')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Arc
include('simpleicons-14/A/Arc')

' renders the element
Arc('Arc', 'Arc', 'an optional tech label', 'an optional description')
@enduml
```

