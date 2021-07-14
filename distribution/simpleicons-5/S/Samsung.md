# Samsung


```text
simpleicons-5/S/Samsung
```

```text
include('simpleicons-5/S/Samsung')
```



| Illustration | Samsung |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Samsung.png) | ![illustration for Samsung](../../simpleicons-5/S/Samsung.Local.png) |




## Samsung

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Samsung
include('simpleicons-5/S/Samsung')

' renders the element
Samsung('Samsung', 'Samsung', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Samsung
include('simpleicons-5/S/Samsung')

' renders the element
Samsung('Samsung', 'Samsung', 'an optional tech label')
@enduml
```

