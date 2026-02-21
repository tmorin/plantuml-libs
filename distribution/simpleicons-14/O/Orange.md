# Orange


```text
simpleicons-14/O/Orange
```

```text
include('simpleicons-14/O/Orange')
```



| Illustration | Orange |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Orange.png) | ![illustration for Orange](../../simpleicons-14/O/Orange.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OrangeXs>`
- `<$OrangeSm>`
- `<$OrangeMd>`
- `<$OrangeLg>`





## Orange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Orange
include('simpleicons-14/O/Orange')

' renders the element
Orange('Orange', 'Orange', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Orange
include('simpleicons-14/O/Orange')

' renders the element
Orange('Orange', 'Orange', 'an optional tech label', 'an optional description')
@enduml
```

