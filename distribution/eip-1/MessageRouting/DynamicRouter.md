# DynamicRouter


```text
eip-1/MessageRouting/DynamicRouter
```

```text
include('eip-1/MessageRouting/DynamicRouter')
```



| Illustration | DynamicRouter | DynamicRouterGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageRouting/DynamicRouter.png) | ![illustration for DynamicRouter](../../eip-1/MessageRouting/DynamicRouter.Local.png) | ![illustration for DynamicRouterGroup](../../eip-1/MessageRouting/DynamicRouterGroup.Local.png) |




## DynamicRouter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element DynamicRouter
include('eip-1/MessageRouting/DynamicRouter')

' renders the element
DynamicRouter('DynamicRouter', 'Dynamic Router', 'an optional tech label')
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

' loads the Item which embeds the element DynamicRouter
include('eip-1/MessageRouting/DynamicRouter')

' renders the element
DynamicRouter('DynamicRouter', 'Dynamic Router', 'an optional tech label')
@enduml
```

## DynamicRouterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element DynamicRouterGroup
include('eip-1/MessageRouting/DynamicRouter')

' renders the element
DynamicRouterGroup('DynamicRouterGroup', 'Dynamic Router Group', 'an optional tech label') {
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

' loads the Item which embeds the element DynamicRouterGroup
include('eip-1/MessageRouting/DynamicRouter')

' renders the element
DynamicRouterGroup('DynamicRouterGroup', 'Dynamic Router Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

