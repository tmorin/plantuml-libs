# Aib


```text
simpleicons-7/A/Aib
```

```text
include('simpleicons-7/A/Aib')
```



| Illustration | Aib |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Aib.png) | ![illustration for Aib](../../simpleicons-7/A/Aib.Local.png) |




## Aib

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Aib
include('simpleicons-7/A/Aib')

' renders the element
Aib('Aib', 'Aib', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aib
include('simpleicons-7/A/Aib')

' renders the element
Aib('Aib', 'Aib', 'an optional tech label', 'an optional description')
@enduml
```

