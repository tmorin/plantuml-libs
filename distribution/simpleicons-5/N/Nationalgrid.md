# Nationalgrid


```text
simpleicons-5/N/Nationalgrid
```

```text
include('simpleicons-5/N/Nationalgrid')
```



| Illustration | Nationalgrid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nationalgrid.png) | ![illustration for Nationalgrid](../../simpleicons-5/N/Nationalgrid.Local.png) |




## Nationalgrid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nationalgrid
include('simpleicons-5/N/Nationalgrid')

' renders the element
Nationalgrid('Nationalgrid', 'Nationalgrid', 'an optional tech label')
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

' loads the Item which embeds the element Nationalgrid
include('simpleicons-5/N/Nationalgrid')

' renders the element
Nationalgrid('Nationalgrid', 'Nationalgrid', 'an optional tech label')
@enduml
```

