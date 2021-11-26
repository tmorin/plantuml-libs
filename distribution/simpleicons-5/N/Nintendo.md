# Nintendo


```text
simpleicons-5/N/Nintendo
```

```text
include('simpleicons-5/N/Nintendo')
```



| Illustration | Nintendo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nintendo.png) | ![illustration for Nintendo](../../simpleicons-5/N/Nintendo.Local.png) |




## Nintendo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nintendo
include('simpleicons-5/N/Nintendo')

' renders the element
Nintendo('Nintendo', 'Nintendo', 'an optional tech label')
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

' loads the Item which embeds the element Nintendo
include('simpleicons-5/N/Nintendo')

' renders the element
Nintendo('Nintendo', 'Nintendo', 'an optional tech label')
@enduml
```

