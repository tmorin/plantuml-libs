# NotAccessible


```text
material/Action/NotAccessible
```

```text
include('material/Action/NotAccessible')
```



| Illustration | NotAccessible |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/NotAccessible.png) | ![illustration for NotAccessible](../../material/Action/NotAccessible.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotAccessibleXs>`
- `<$NotAccessibleSm>`
- `<$NotAccessibleMd>`
- `<$NotAccessibleLg>`





## NotAccessible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NotAccessible
include('material/Action/NotAccessible')

' renders the element
NotAccessible('NotAccessible', 'Not Accessible', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element NotAccessible
include('material/Action/NotAccessible')

' renders the element
NotAccessible('NotAccessible', 'Not Accessible', 'an optional tech label', 'an optional description')
@enduml
```

