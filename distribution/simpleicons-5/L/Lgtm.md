# Lgtm


```text
simpleicons-5/L/Lgtm
```

```text
include('simpleicons-5/L/Lgtm')
```



| Illustration | Lgtm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lgtm.png) | ![illustration for Lgtm](../../simpleicons-5/L/Lgtm.Local.png) |




## Lgtm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lgtm
include('simpleicons-5/L/Lgtm')

' renders the element
Lgtm('Lgtm', 'Lgtm', 'an optional tech label')
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

' loads the Item which embeds the element Lgtm
include('simpleicons-5/L/Lgtm')

' renders the element
Lgtm('Lgtm', 'Lgtm', 'an optional tech label')
@enduml
```

