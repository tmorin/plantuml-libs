# Hackaday


```text
simpleicons-5/H/Hackaday
```

```text
include('simpleicons-5/H/Hackaday')
```



| Illustration | Hackaday |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hackaday.png) | ![illustration for Hackaday](../../simpleicons-5/H/Hackaday.Local.png) |




## Hackaday

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hackaday
include('simpleicons-5/H/Hackaday')

' renders the element
Hackaday('Hackaday', 'Hackaday', 'an optional tech label')
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

' loads the Item which embeds the element Hackaday
include('simpleicons-5/H/Hackaday')

' renders the element
Hackaday('Hackaday', 'Hackaday', 'an optional tech label')
@enduml
```

