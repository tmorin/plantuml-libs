# Nzxt


```text
simpleicons-5/N/Nzxt
```

```text
include('simpleicons-5/N/Nzxt')
```



| Illustration | Nzxt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nzxt.png) | ![illustration for Nzxt](../../simpleicons-5/N/Nzxt.Local.png) |




## Nzxt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nzxt
include('simpleicons-5/N/Nzxt')

' renders the element
Nzxt('Nzxt', 'Nzxt', 'an optional tech label')
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

' loads the Item which embeds the element Nzxt
include('simpleicons-5/N/Nzxt')

' renders the element
Nzxt('Nzxt', 'Nzxt', 'an optional tech label')
@enduml
```

