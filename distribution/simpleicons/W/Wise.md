# Wise


```text
simpleicons/W/Wise
```

```text
include('simpleicons/W/Wise')
```



| Illustration | Wise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wise.png) | ![illustration for Wise](../../simpleicons/W/Wise.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WiseXs>`
- `<$WiseSm>`
- `<$WiseMd>`
- `<$WiseLg>`





## Wise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wise
include('simpleicons/W/Wise')

' renders the element
Wise('Wise', 'Wise', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wise
include('simpleicons/W/Wise')

' renders the element
Wise('Wise', 'Wise', 'an optional tech label', 'an optional description')
@enduml
```

