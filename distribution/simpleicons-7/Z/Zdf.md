# Zdf


```text
simpleicons-7/Z/Zdf
```

```text
include('simpleicons-7/Z/Zdf')
```



| Illustration | Zdf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zdf.png) | ![illustration for Zdf](../../simpleicons-7/Z/Zdf.Local.png) |




## Zdf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zdf
include('simpleicons-7/Z/Zdf')

' renders the element
Zdf('Zdf', 'Zdf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zdf
include('simpleicons-7/Z/Zdf')

' renders the element
Zdf('Zdf', 'Zdf', 'an optional tech label', 'an optional description')
@enduml
```

