# Lidl


```text
simpleicons-5/L/Lidl
```

```text
include('simpleicons-5/L/Lidl')
```



| Illustration | Lidl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lidl.png) | ![illustration for Lidl](../../simpleicons-5/L/Lidl.Local.png) |




## Lidl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lidl
include('simpleicons-5/L/Lidl')

' renders the element
Lidl('Lidl', 'Lidl', 'an optional tech label')
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

' loads the Item which embeds the element Lidl
include('simpleicons-5/L/Lidl')

' renders the element
Lidl('Lidl', 'Lidl', 'an optional tech label')
@enduml
```

