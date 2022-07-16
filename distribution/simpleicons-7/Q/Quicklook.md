# Quicklook


```text
simpleicons-7/Q/Quicklook
```

```text
include('simpleicons-7/Q/Quicklook')
```



| Illustration | Quicklook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Q/Quicklook.png) | ![illustration for Quicklook](../../simpleicons-7/Q/Quicklook.Local.png) |




## Quicklook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Quicklook
include('simpleicons-7/Q/Quicklook')

' renders the element
Quicklook('Quicklook', 'Quicklook', 'an optional tech label')
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

' loads the Item which embeds the element Quicklook
include('simpleicons-7/Q/Quicklook')

' renders the element
Quicklook('Quicklook', 'Quicklook', 'an optional tech label')
@enduml
```

