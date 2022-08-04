# Nationalgrid


```text
simpleicons-7/N/Nationalgrid
```

```text
include('simpleicons-7/N/Nationalgrid')
```



| Illustration | Nationalgrid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nationalgrid.png) | ![illustration for Nationalgrid](../../simpleicons-7/N/Nationalgrid.Local.png) |




## Nationalgrid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nationalgrid
include('simpleicons-7/N/Nationalgrid')

' renders the element
Nationalgrid('Nationalgrid', 'Nationalgrid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nationalgrid
include('simpleicons-7/N/Nationalgrid')

' renders the element
Nationalgrid('Nationalgrid', 'Nationalgrid', 'an optional tech label', 'an optional description')
@enduml
```

