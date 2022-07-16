# Ram


```text
simpleicons-7/R/Ram
```

```text
include('simpleicons-7/R/Ram')
```



| Illustration | Ram |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Ram.png) | ![illustration for Ram](../../simpleicons-7/R/Ram.Local.png) |




## Ram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ram
include('simpleicons-7/R/Ram')

' renders the element
Ram('Ram', 'Ram', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ram
include('simpleicons-7/R/Ram')

' renders the element
Ram('Ram', 'Ram', 'an optional tech label')
@enduml
```

