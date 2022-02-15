# Sharp


```text
simpleicons-6/S/Sharp
```

```text
include('simpleicons-6/S/Sharp')
```



| Illustration | Sharp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sharp.png) | ![illustration for Sharp](../../simpleicons-6/S/Sharp.Local.png) |




## Sharp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sharp
include('simpleicons-6/S/Sharp')

' renders the element
Sharp('Sharp', 'Sharp', 'an optional tech label')
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

' loads the Item which embeds the element Sharp
include('simpleicons-6/S/Sharp')

' renders the element
Sharp('Sharp', 'Sharp', 'an optional tech label')
@enduml
```

