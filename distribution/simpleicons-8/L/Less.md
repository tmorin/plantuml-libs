# Less


```text
simpleicons-8/L/Less
```

```text
include('simpleicons-8/L/Less')
```



| Illustration | Less |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Less.png) | ![illustration for Less](../../simpleicons-8/L/Less.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LessXs>`
- `<$LessSm>`
- `<$LessMd>`
- `<$LessLg>`





## Less

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Less
include('simpleicons-8/L/Less')

' renders the element
Less('Less', 'Less', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Less
include('simpleicons-8/L/Less')

' renders the element
Less('Less', 'Less', 'an optional tech label', 'an optional description')
@enduml
```

