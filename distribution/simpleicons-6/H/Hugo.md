# Hugo


```text
simpleicons-6/H/Hugo
```

```text
include('simpleicons-6/H/Hugo')
```



| Illustration | Hugo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Hugo.png) | ![illustration for Hugo](../../simpleicons-6/H/Hugo.Local.png) |




## Hugo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hugo
include('simpleicons-6/H/Hugo')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hugo
include('simpleicons-6/H/Hugo')

' renders the element
Hugo('Hugo', 'Hugo', 'an optional tech label')
@enduml
```

