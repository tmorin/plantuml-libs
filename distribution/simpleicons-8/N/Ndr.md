# Ndr


```text
simpleicons-8/N/Ndr
```

```text
include('simpleicons-8/N/Ndr')
```



| Illustration | Ndr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Ndr.png) | ![illustration for Ndr](../../simpleicons-8/N/Ndr.Local.png) |




## Ndr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ndr
include('simpleicons-8/N/Ndr')

' renders the element
Ndr('Ndr', 'Ndr', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ndr
include('simpleicons-8/N/Ndr')

' renders the element
Ndr('Ndr', 'Ndr', 'an optional tech label', 'an optional description')
@enduml
```

