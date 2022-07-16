# Tesco


```text
simpleicons-7/T/Tesco
```

```text
include('simpleicons-7/T/Tesco')
```



| Illustration | Tesco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tesco.png) | ![illustration for Tesco](../../simpleicons-7/T/Tesco.Local.png) |




## Tesco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tesco
include('simpleicons-7/T/Tesco')

' renders the element
Tesco('Tesco', 'Tesco', 'an optional tech label')
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

' loads the Item which embeds the element Tesco
include('simpleicons-7/T/Tesco')

' renders the element
Tesco('Tesco', 'Tesco', 'an optional tech label')
@enduml
```

