# Jss


```text
simpleicons-8/J/Jss
```

```text
include('simpleicons-8/J/Jss')
```



| Illustration | Jss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/J/Jss.png) | ![illustration for Jss](../../simpleicons-8/J/Jss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JssXs>`
- `<$JssSm>`
- `<$JssMd>`
- `<$JssLg>`





## Jss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Jss
include('simpleicons-8/J/Jss')

' renders the element
Jss('Jss', 'Jss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jss
include('simpleicons-8/J/Jss')

' renders the element
Jss('Jss', 'Jss', 'an optional tech label', 'an optional description')
@enduml
```

