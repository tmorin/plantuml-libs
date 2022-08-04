# Hubspot


```text
simpleicons-7/H/Hubspot
```

```text
include('simpleicons-7/H/Hubspot')
```



| Illustration | Hubspot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Hubspot.png) | ![illustration for Hubspot](../../simpleicons-7/H/Hubspot.Local.png) |




## Hubspot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Hubspot
include('simpleicons-7/H/Hubspot')

' renders the element
Hubspot('Hubspot', 'Hubspot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hubspot
include('simpleicons-7/H/Hubspot')

' renders the element
Hubspot('Hubspot', 'Hubspot', 'an optional tech label', 'an optional description')
@enduml
```

