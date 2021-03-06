# Router


```text
homecloud-1/Network/Router
```

```text
include('homecloud-1/Network/Router')
```



| Illustration | Router | RouterCard | RouterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../homecloud-1/Network/Router.png) | ![illustration for Router](../../homecloud-1/Network/Router.Local.png) | ![illustration for RouterCard](../../homecloud-1/Network/RouterCard.Local.png) | ![illustration for RouterGroup](../../homecloud-1/Network/RouterGroup.Local.png) |




## Router

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element Router
include('homecloud-1/Network/Router')

' renders the element
Router('Router', 'Router', 'an optional tech label')
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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element Router
include('homecloud-1/Network/Router')

' renders the element
Router('Router', 'Router', 'an optional tech label')
@enduml
```

## RouterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element RouterCard
include('homecloud-1/Network/Router')

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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element RouterCard
include('homecloud-1/Network/Router')

' renders the element
RouterCard('RouterCard', 'Router Card', 'an optional description')
@enduml
```

## RouterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element RouterGroup
include('homecloud-1/Network/Router')

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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element RouterGroup
include('homecloud-1/Network/Router')

' renders the element
RouterGroup('RouterGroup', 'Router Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

