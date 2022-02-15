# Nintendo3Ds


```text
simpleicons-6/N/Nintendo3Ds
```

```text
include('simpleicons-6/N/Nintendo3Ds')
```



| Illustration | Nintendo3Ds |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nintendo3Ds.png) | ![illustration for Nintendo3Ds](../../simpleicons-6/N/Nintendo3Ds.Local.png) |




## Nintendo3Ds

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nintendo3Ds
include('simpleicons-6/N/Nintendo3Ds')

' renders the element
Nintendo3Ds('Nintendo3Ds', 'Nintendo3 Ds', 'an optional tech label')
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

' loads the Item which embeds the element Nintendo3Ds
include('simpleicons-6/N/Nintendo3Ds')

' renders the element
Nintendo3Ds('Nintendo3Ds', 'Nintendo3 Ds', 'an optional tech label')
@enduml
```

