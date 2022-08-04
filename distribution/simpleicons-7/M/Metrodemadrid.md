# Metrodemadrid


```text
simpleicons-7/M/Metrodemadrid
```

```text
include('simpleicons-7/M/Metrodemadrid')
```



| Illustration | Metrodemadrid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Metrodemadrid.png) | ![illustration for Metrodemadrid](../../simpleicons-7/M/Metrodemadrid.Local.png) |




## Metrodemadrid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Metrodemadrid
include('simpleicons-7/M/Metrodemadrid')

' renders the element
Metrodemadrid('Metrodemadrid', 'Metrodemadrid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Metrodemadrid
include('simpleicons-7/M/Metrodemadrid')

' renders the element
Metrodemadrid('Metrodemadrid', 'Metrodemadrid', 'an optional tech label', 'an optional description')
@enduml
```

