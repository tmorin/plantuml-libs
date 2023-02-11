# Fig


```text
simpleicons-8/F/Fig
```

```text
include('simpleicons-8/F/Fig')
```



| Illustration | Fig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fig.png) | ![illustration for Fig](../../simpleicons-8/F/Fig.Local.png) |




## Fig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fig
include('simpleicons-8/F/Fig')

' renders the element
Fig('Fig', 'Fig', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fig
include('simpleicons-8/F/Fig')

' renders the element
Fig('Fig', 'Fig', 'an optional tech label', 'an optional description')
@enduml
```

