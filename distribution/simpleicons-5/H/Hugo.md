# Hugo


```text
simpleicons-5/H/Hugo
```

```text
include('simpleicons-5/H/Hugo')
```



| Illustration | Hugo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hugo.png) | ![illustration for Hugo](../../simpleicons-5/H/Hugo.Local.png) |




## Hugo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hugo
include('simpleicons-5/H/Hugo')

' renders the element
Hugo('Hugo', 'Hugo', 'an optional tech label')
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

' loads the Item which embeds the element Hugo
include('simpleicons-5/H/Hugo')

' renders the element
Hugo('Hugo', 'Hugo', 'an optional tech label')
@enduml
```

