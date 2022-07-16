# Mui


```text
simpleicons-7/M/Mui
```

```text
include('simpleicons-7/M/Mui')
```



| Illustration | Mui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mui.png) | ![illustration for Mui](../../simpleicons-7/M/Mui.Local.png) |




## Mui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mui
include('simpleicons-7/M/Mui')

' renders the element
Mui('Mui', 'Mui', 'an optional tech label')
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

' loads the Item which embeds the element Mui
include('simpleicons-7/M/Mui')

' renders the element
Mui('Mui', 'Mui', 'an optional tech label')
@enduml
```

