# Telegraph


```text
simpleicons-6/T/Telegraph
```

```text
include('simpleicons-6/T/Telegraph')
```



| Illustration | Telegraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Telegraph.png) | ![illustration for Telegraph](../../simpleicons-6/T/Telegraph.Local.png) |




## Telegraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Telegraph
include('simpleicons-6/T/Telegraph')

' renders the element
Telegraph('Telegraph', 'Telegraph', 'an optional tech label')
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

' loads the Item which embeds the element Telegraph
include('simpleicons-6/T/Telegraph')

' renders the element
Telegraph('Telegraph', 'Telegraph', 'an optional tech label')
@enduml
```

