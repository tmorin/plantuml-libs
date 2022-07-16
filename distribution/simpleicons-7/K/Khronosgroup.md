# Khronosgroup


```text
simpleicons-7/K/Khronosgroup
```

```text
include('simpleicons-7/K/Khronosgroup')
```



| Illustration | Khronosgroup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Khronosgroup.png) | ![illustration for Khronosgroup](../../simpleicons-7/K/Khronosgroup.Local.png) |




## Khronosgroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Khronosgroup
include('simpleicons-7/K/Khronosgroup')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Khronosgroup
include('simpleicons-7/K/Khronosgroup')

' renders the element
Khronosgroup('Khronosgroup', 'Khronosgroup', 'an optional tech label')
@enduml
```

