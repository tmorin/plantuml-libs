# Opnsense


```text
simpleicons-5/O/Opnsense
```

```text
include('simpleicons-5/O/Opnsense')
```



| Illustration | Opnsense |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Opnsense.png) | ![illustration for Opnsense](../../simpleicons-5/O/Opnsense.Local.png) |




## Opnsense

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Opnsense
include('simpleicons-5/O/Opnsense')

' renders the element
Opnsense('Opnsense', 'Opnsense', 'an optional tech label')
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

' loads the Item which embeds the element Opnsense
include('simpleicons-5/O/Opnsense')

' renders the element
Opnsense('Opnsense', 'Opnsense', 'an optional tech label')
@enduml
```

