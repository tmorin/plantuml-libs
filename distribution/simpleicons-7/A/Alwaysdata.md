# Alwaysdata


```text
simpleicons-7/A/Alwaysdata
```

```text
include('simpleicons-7/A/Alwaysdata')
```



| Illustration | Alwaysdata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Alwaysdata.png) | ![illustration for Alwaysdata](../../simpleicons-7/A/Alwaysdata.Local.png) |




## Alwaysdata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Alwaysdata
include('simpleicons-7/A/Alwaysdata')

' renders the element
Alwaysdata('Alwaysdata', 'Alwaysdata', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alwaysdata
include('simpleicons-7/A/Alwaysdata')

' renders the element
Alwaysdata('Alwaysdata', 'Alwaysdata', 'an optional tech label', 'an optional description')
@enduml
```

