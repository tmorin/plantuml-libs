# Nrwl


```text
simpleicons-6/N/Nrwl
```

```text
include('simpleicons-6/N/Nrwl')
```



| Illustration | Nrwl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nrwl.png) | ![illustration for Nrwl](../../simpleicons-6/N/Nrwl.Local.png) |




## Nrwl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nrwl
include('simpleicons-6/N/Nrwl')

' renders the element
Nrwl('Nrwl', 'Nrwl', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nrwl
include('simpleicons-6/N/Nrwl')

' renders the element
Nrwl('Nrwl', 'Nrwl', 'an optional tech label')
@enduml
```

