# Vivino


```text
simpleicons-6/V/Vivino
```

```text
include('simpleicons-6/V/Vivino')
```



| Illustration | Vivino |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vivino.png) | ![illustration for Vivino](../../simpleicons-6/V/Vivino.Local.png) |




## Vivino

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vivino
include('simpleicons-6/V/Vivino')

' renders the element
Vivino('Vivino', 'Vivino', 'an optional tech label')
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

' loads the Item which embeds the element Vivino
include('simpleicons-6/V/Vivino')

' renders the element
Vivino('Vivino', 'Vivino', 'an optional tech label')
@enduml
```

