# Materialdesignicons


```text
simpleicons-5/M/Materialdesignicons
```

```text
include('simpleicons-5/M/Materialdesignicons')
```



| Illustration | Materialdesignicons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Materialdesignicons.png) | ![illustration for Materialdesignicons](../../simpleicons-5/M/Materialdesignicons.Local.png) |




## Materialdesignicons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Materialdesignicons
include('simpleicons-5/M/Materialdesignicons')

' renders the element
Materialdesignicons('Materialdesignicons', 'Materialdesignicons', 'an optional tech label')
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

' loads the Item which embeds the element Materialdesignicons
include('simpleicons-5/M/Materialdesignicons')

' renders the element
Materialdesignicons('Materialdesignicons', 'Materialdesignicons', 'an optional tech label')
@enduml
```

