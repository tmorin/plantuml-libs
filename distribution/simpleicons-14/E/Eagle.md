# Eagle


```text
simpleicons-14/E/Eagle
```

```text
include('simpleicons-14/E/Eagle')
```



| Illustration | Eagle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Eagle.png) | ![illustration for Eagle](../../simpleicons-14/E/Eagle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EagleXs>`
- `<$EagleSm>`
- `<$EagleMd>`
- `<$EagleLg>`





## Eagle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Eagle
include('simpleicons-14/E/Eagle')

' renders the element
Eagle('Eagle', 'Eagle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eagle
include('simpleicons-14/E/Eagle')

' renders the element
Eagle('Eagle', 'Eagle', 'an optional tech label', 'an optional description')
@enduml
```

