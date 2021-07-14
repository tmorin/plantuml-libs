# Construct3


```text
simpleicons-5/C/Construct3
```

```text
include('simpleicons-5/C/Construct3')
```



| Illustration | Construct3 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Construct3.png) | ![illustration for Construct3](../../simpleicons-5/C/Construct3.Local.png) |




## Construct3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Construct3
include('simpleicons-5/C/Construct3')

' renders the element
Construct3('Construct3', 'Construct3', 'an optional tech label')
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

' loads the Item which embeds the element Construct3
include('simpleicons-5/C/Construct3')

' renders the element
Construct3('Construct3', 'Construct3', 'an optional tech label')
@enduml
```

