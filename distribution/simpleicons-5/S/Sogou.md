# Sogou


```text
simpleicons-5/S/Sogou
```

```text
include('simpleicons-5/S/Sogou')
```



| Illustration | Sogou |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sogou.png) | ![illustration for Sogou](../../simpleicons-5/S/Sogou.Local.png) |




## Sogou

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sogou
include('simpleicons-5/S/Sogou')

' renders the element
Sogou('Sogou', 'Sogou', 'an optional tech label')
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

' loads the Item which embeds the element Sogou
include('simpleicons-5/S/Sogou')

' renders the element
Sogou('Sogou', 'Sogou', 'an optional tech label')
@enduml
```

