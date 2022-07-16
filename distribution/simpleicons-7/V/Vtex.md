# Vtex


```text
simpleicons-7/V/Vtex
```

```text
include('simpleicons-7/V/Vtex')
```



| Illustration | Vtex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vtex.png) | ![illustration for Vtex](../../simpleicons-7/V/Vtex.Local.png) |




## Vtex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vtex
include('simpleicons-7/V/Vtex')

' renders the element
Vtex('Vtex', 'Vtex', 'an optional tech label')
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

' loads the Item which embeds the element Vtex
include('simpleicons-7/V/Vtex')

' renders the element
Vtex('Vtex', 'Vtex', 'an optional tech label')
@enduml
```

