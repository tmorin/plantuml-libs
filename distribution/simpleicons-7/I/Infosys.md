# Infosys


```text
simpleicons-7/I/Infosys
```

```text
include('simpleicons-7/I/Infosys')
```



| Illustration | Infosys |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Infosys.png) | ![illustration for Infosys](../../simpleicons-7/I/Infosys.Local.png) |




## Infosys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Infosys
include('simpleicons-7/I/Infosys')

' renders the element
Infosys('Infosys', 'Infosys', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Infosys
include('simpleicons-7/I/Infosys')

' renders the element
Infosys('Infosys', 'Infosys', 'an optional tech label', 'an optional description')
@enduml
```

