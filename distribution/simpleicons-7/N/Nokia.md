# Nokia


```text
simpleicons-7/N/Nokia
```

```text
include('simpleicons-7/N/Nokia')
```



| Illustration | Nokia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nokia.png) | ![illustration for Nokia](../../simpleicons-7/N/Nokia.Local.png) |




## Nokia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nokia
include('simpleicons-7/N/Nokia')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nokia
include('simpleicons-7/N/Nokia')

' renders the element
Nokia('Nokia', 'Nokia', 'an optional tech label')
@enduml
```

