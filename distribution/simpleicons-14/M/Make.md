# Make


```text
simpleicons-14/M/Make
```

```text
include('simpleicons-14/M/Make')
```



| Illustration | Make |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Make.png) | ![illustration for Make](../../simpleicons-14/M/Make.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MakeXs>`
- `<$MakeSm>`
- `<$MakeMd>`
- `<$MakeLg>`





## Make

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Make
include('simpleicons-14/M/Make')

' renders the element
Make('Make', 'Make', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Make
include('simpleicons-14/M/Make')

' renders the element
Make('Make', 'Make', 'an optional tech label', 'an optional description')
@enduml
```

