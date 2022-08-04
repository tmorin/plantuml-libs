# Microsoftonenote


```text
simpleicons-7/M/Microsoftonenote
```

```text
include('simpleicons-7/M/Microsoftonenote')
```



| Illustration | Microsoftonenote |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Microsoftonenote.png) | ![illustration for Microsoftonenote](../../simpleicons-7/M/Microsoftonenote.Local.png) |




## Microsoftonenote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Microsoftonenote
include('simpleicons-7/M/Microsoftonenote')

' renders the element
Microsoftonenote('Microsoftonenote', 'Microsoftonenote', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microsoftonenote
include('simpleicons-7/M/Microsoftonenote')

' renders the element
Microsoftonenote('Microsoftonenote', 'Microsoftonenote', 'an optional tech label', 'an optional description')
@enduml
```

