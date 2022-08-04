# Amazon


```text
simpleicons-7/A/Amazon
```

```text
include('simpleicons-7/A/Amazon')
```



| Illustration | Amazon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Amazon.png) | ![illustration for Amazon](../../simpleicons-7/A/Amazon.Local.png) |




## Amazon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Amazon
include('simpleicons-7/A/Amazon')

' renders the element
Amazon('Amazon', 'Amazon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amazon
include('simpleicons-7/A/Amazon')

' renders the element
Amazon('Amazon', 'Amazon', 'an optional tech label', 'an optional description')
@enduml
```

