# Freenas


```text
simpleicons-7/F/Freenas
```

```text
include('simpleicons-7/F/Freenas')
```



| Illustration | Freenas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Freenas.png) | ![illustration for Freenas](../../simpleicons-7/F/Freenas.Local.png) |




## Freenas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Freenas
include('simpleicons-7/F/Freenas')

' renders the element
Freenas('Freenas', 'Freenas', 'an optional tech label')
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

' loads the Item which embeds the element Freenas
include('simpleicons-7/F/Freenas')

' renders the element
Freenas('Freenas', 'Freenas', 'an optional tech label')
@enduml
```

