# Router


```text
homecloud-2/Network/Router
```

```text
include('homecloud-2/Network/Router')
```



| Illustration | Router | RouterCard | RouterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../homecloud-2/Network/Router.png) | ![illustration for Router](../../homecloud-2/Network/Router.Local.png) | ![illustration for RouterCard](../../homecloud-2/Network/RouterCard.Local.png) | ![illustration for RouterGroup](../../homecloud-2/Network/RouterGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RouterXs>`
- `<$RouterSm>`
- `<$RouterMd>`
- `<$RouterLg>`





## Router

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element Router
include('homecloud-2/Network/Router')

' renders the element
Router('Router', 'Router', 'an optional tech label', 'an optional description')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element Router
include('homecloud-2/Network/Router')

' renders the element
Router('Router', 'Router', 'an optional tech label', 'an optional description')
@enduml
```

## RouterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element RouterCard
include('homecloud-2/Network/Router')

' renders the element
RouterCard('RouterCard', 'Router Card', 'an optional description')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element RouterCard
include('homecloud-2/Network/Router')

' renders the element
RouterCard('RouterCard', 'Router Card', 'an optional description')
@enduml
```

## RouterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element RouterGroup
include('homecloud-2/Network/Router')

' renders the element
RouterGroup('RouterGroup', 'Router Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element RouterGroup
include('homecloud-2/Network/Router')

' renders the element
RouterGroup('RouterGroup', 'Router Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

