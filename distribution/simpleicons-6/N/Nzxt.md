# Nzxt


```text
simpleicons-6/N/Nzxt
```

```text
include('simpleicons-6/N/Nzxt')
```



| Illustration | Nzxt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nzxt.png) | ![illustration for Nzxt](../../simpleicons-6/N/Nzxt.Local.png) |




## Nzxt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nzxt
include('simpleicons-6/N/Nzxt')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nzxt
include('simpleicons-6/N/Nzxt')

' renders the element
Nzxt('Nzxt', 'Nzxt', 'an optional tech label')
@enduml
```

