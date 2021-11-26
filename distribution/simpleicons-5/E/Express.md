# Express


```text
simpleicons-5/E/Express
```

```text
include('simpleicons-5/E/Express')
```



| Illustration | Express |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Express.png) | ![illustration for Express](../../simpleicons-5/E/Express.Local.png) |




## Express

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Express
include('simpleicons-5/E/Express')

' renders the element
Express('Express', 'Express', 'an optional tech label')
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

' loads the Item which embeds the element Express
include('simpleicons-5/E/Express')

' renders the element
Express('Express', 'Express', 'an optional tech label')
@enduml
```

