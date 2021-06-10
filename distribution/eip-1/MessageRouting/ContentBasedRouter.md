# ContentBasedRouter


```text
eip-1/MessageRouting/ContentBasedRouter
```

```text
include('eip-1/MessageRouting/ContentBasedRouter')
```



| Illustration | ContentBasedRouter | ContentBasedRouterGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageRouting/ContentBasedRouter.png) | ![illustration for ContentBasedRouter](../../eip-1/MessageRouting/ContentBasedRouter.Local.png) | ![illustration for ContentBasedRouterGroup](../../eip-1/MessageRouting/ContentBasedRouterGroup.Local.png) |




## ContentBasedRouter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ContentBasedRouter
include('eip-1/MessageRouting/ContentBasedRouter')

' renders the element
ContentBasedRouter('ContentBasedRouter', 'Content Based Router', 'an optional tech label')
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
include('eip-1/bootstrap')

' loads the Item which embeds the element ContentBasedRouter
include('eip-1/MessageRouting/ContentBasedRouter')

' renders the element
ContentBasedRouter('ContentBasedRouter', 'Content Based Router', 'an optional tech label')
@enduml
```

## ContentBasedRouterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ContentBasedRouterGroup
include('eip-1/MessageRouting/ContentBasedRouter')

' renders the element
ContentBasedRouterGroup('ContentBasedRouterGroup', 'Content Based Router Group', 'an optional tech label') {
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
include('eip-1/bootstrap')

' loads the Item which embeds the element ContentBasedRouterGroup
include('eip-1/MessageRouting/ContentBasedRouter')

' renders the element
ContentBasedRouterGroup('ContentBasedRouterGroup', 'Content Based Router Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

