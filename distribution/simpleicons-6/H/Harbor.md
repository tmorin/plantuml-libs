# Harbor


```text
simpleicons-6/H/Harbor
```

```text
include('simpleicons-6/H/Harbor')
```



| Illustration | Harbor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Harbor.png) | ![illustration for Harbor](../../simpleicons-6/H/Harbor.Local.png) |




## Harbor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Harbor
include('simpleicons-6/H/Harbor')

' renders the element
Harbor('Harbor', 'Harbor', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Harbor
include('simpleicons-6/H/Harbor')

' renders the element
Harbor('Harbor', 'Harbor', 'an optional tech label')
@enduml
```

