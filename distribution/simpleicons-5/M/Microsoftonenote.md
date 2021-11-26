# Microsoftonenote


```text
simpleicons-5/M/Microsoftonenote
```

```text
include('simpleicons-5/M/Microsoftonenote')
```



| Illustration | Microsoftonenote |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Microsoftonenote.png) | ![illustration for Microsoftonenote](../../simpleicons-5/M/Microsoftonenote.Local.png) |




## Microsoftonenote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Microsoftonenote
include('simpleicons-5/M/Microsoftonenote')

' renders the element
Microsoftonenote('Microsoftonenote', 'Microsoftonenote', 'an optional tech label')
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

' loads the Item which embeds the element Microsoftonenote
include('simpleicons-5/M/Microsoftonenote')

' renders the element
Microsoftonenote('Microsoftonenote', 'Microsoftonenote', 'an optional tech label')
@enduml
```

