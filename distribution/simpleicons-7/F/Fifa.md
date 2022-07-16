# Fifa


```text
simpleicons-7/F/Fifa
```

```text
include('simpleicons-7/F/Fifa')
```



| Illustration | Fifa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Fifa.png) | ![illustration for Fifa](../../simpleicons-7/F/Fifa.Local.png) |




## Fifa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fifa
include('simpleicons-7/F/Fifa')

' renders the element
Fifa('Fifa', 'Fifa', 'an optional tech label')
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

' loads the Item which embeds the element Fifa
include('simpleicons-7/F/Fifa')

' renders the element
Fifa('Fifa', 'Fifa', 'an optional tech label')
@enduml
```

