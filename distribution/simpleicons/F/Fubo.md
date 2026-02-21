# Fubo


```text
simpleicons/F/Fubo
```

```text
include('simpleicons/F/Fubo')
```



| Illustration | Fubo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fubo.png) | ![illustration for Fubo](../../simpleicons/F/Fubo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FuboXs>`
- `<$FuboSm>`
- `<$FuboMd>`
- `<$FuboLg>`





## Fubo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fubo
include('simpleicons/F/Fubo')

' renders the element
Fubo('Fubo', 'Fubo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fubo
include('simpleicons/F/Fubo')

' renders the element
Fubo('Fubo', 'Fubo', 'an optional tech label', 'an optional description')
@enduml
```

