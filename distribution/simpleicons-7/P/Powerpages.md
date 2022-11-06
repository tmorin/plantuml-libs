# Powerpages


```text
simpleicons-7/P/Powerpages
```

```text
include('simpleicons-7/P/Powerpages')
```



| Illustration | Powerpages |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Powerpages.png) | ![illustration for Powerpages](../../simpleicons-7/P/Powerpages.Local.png) |




## Powerpages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Powerpages
include('simpleicons-7/P/Powerpages')

' renders the element
Powerpages('Powerpages', 'Powerpages', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Powerpages
include('simpleicons-7/P/Powerpages')

' renders the element
Powerpages('Powerpages', 'Powerpages', 'an optional tech label', 'an optional description')
@enduml
```

