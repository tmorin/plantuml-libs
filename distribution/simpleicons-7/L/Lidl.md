# Lidl


```text
simpleicons-7/L/Lidl
```

```text
include('simpleicons-7/L/Lidl')
```



| Illustration | Lidl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Lidl.png) | ![illustration for Lidl](../../simpleicons-7/L/Lidl.Local.png) |




## Lidl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Lidl
include('simpleicons-7/L/Lidl')

' renders the element
Lidl('Lidl', 'Lidl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lidl
include('simpleicons-7/L/Lidl')

' renders the element
Lidl('Lidl', 'Lidl', 'an optional tech label', 'an optional description')
@enduml
```

