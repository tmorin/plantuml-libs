# Nokia


```text
simpleicons-6/N/Nokia
```

```text
include('simpleicons-6/N/Nokia')
```



| Illustration | Nokia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nokia.png) | ![illustration for Nokia](../../simpleicons-6/N/Nokia.Local.png) |




## Nokia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nokia
include('simpleicons-6/N/Nokia')

' renders the element
Nokia('Nokia', 'Nokia', 'an optional tech label')
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

' loads the Item which embeds the element Nokia
include('simpleicons-6/N/Nokia')

' renders the element
Nokia('Nokia', 'Nokia', 'an optional tech label')
@enduml
```

