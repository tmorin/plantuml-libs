# Khronosgroup


```text
simpleicons-5/K/Khronosgroup
```

```text
include('simpleicons-5/K/Khronosgroup')
```



| Illustration | Khronosgroup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Khronosgroup.png) | ![illustration for Khronosgroup](../../simpleicons-5/K/Khronosgroup.Local.png) |




## Khronosgroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Khronosgroup
include('simpleicons-5/K/Khronosgroup')

' renders the element
Khronosgroup('Khronosgroup', 'Khronosgroup', 'an optional tech label')
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

' loads the Item which embeds the element Khronosgroup
include('simpleicons-5/K/Khronosgroup')

' renders the element
Khronosgroup('Khronosgroup', 'Khronosgroup', 'an optional tech label')
@enduml
```

