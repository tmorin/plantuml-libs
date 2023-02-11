# Namebase


```text
simpleicons-8/N/Namebase
```

```text
include('simpleicons-8/N/Namebase')
```



| Illustration | Namebase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Namebase.png) | ![illustration for Namebase](../../simpleicons-8/N/Namebase.Local.png) |




## Namebase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Namebase
include('simpleicons-8/N/Namebase')

' renders the element
Namebase('Namebase', 'Namebase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Namebase
include('simpleicons-8/N/Namebase')

' renders the element
Namebase('Namebase', 'Namebase', 'an optional tech label', 'an optional description')
@enduml
```

