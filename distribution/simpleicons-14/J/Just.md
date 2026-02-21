# Just


```text
simpleicons-14/J/Just
```

```text
include('simpleicons-14/J/Just')
```



| Illustration | Just |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Just.png) | ![illustration for Just](../../simpleicons-14/J/Just.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JustXs>`
- `<$JustSm>`
- `<$JustMd>`
- `<$JustLg>`





## Just

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Just
include('simpleicons-14/J/Just')

' renders the element
Just('Just', 'Just', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Just
include('simpleicons-14/J/Just')

' renders the element
Just('Just', 'Just', 'an optional tech label', 'an optional description')
@enduml
```

