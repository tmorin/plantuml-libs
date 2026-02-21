# Postiz


```text
simpleicons/P/Postiz
```

```text
include('simpleicons/P/Postiz')
```



| Illustration | Postiz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Postiz.png) | ![illustration for Postiz](../../simpleicons/P/Postiz.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PostizXs>`
- `<$PostizSm>`
- `<$PostizMd>`
- `<$PostizLg>`





## Postiz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Postiz
include('simpleicons/P/Postiz')

' renders the element
Postiz('Postiz', 'Postiz', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Postiz
include('simpleicons/P/Postiz')

' renders the element
Postiz('Postiz', 'Postiz', 'an optional tech label', 'an optional description')
@enduml
```

