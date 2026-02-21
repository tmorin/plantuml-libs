# Fi


```text
simpleicons/F/Fi
```

```text
include('simpleicons/F/Fi')
```



| Illustration | Fi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fi.png) | ![illustration for Fi](../../simpleicons/F/Fi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FiXs>`
- `<$FiSm>`
- `<$FiMd>`
- `<$FiLg>`





## Fi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fi
include('simpleicons/F/Fi')

' renders the element
Fi('Fi', 'Fi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fi
include('simpleicons/F/Fi')

' renders the element
Fi('Fi', 'Fi', 'an optional tech label', 'an optional description')
@enduml
```

