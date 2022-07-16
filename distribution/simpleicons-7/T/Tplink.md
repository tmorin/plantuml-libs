# Tplink


```text
simpleicons-7/T/Tplink
```

```text
include('simpleicons-7/T/Tplink')
```



| Illustration | Tplink |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tplink.png) | ![illustration for Tplink](../../simpleicons-7/T/Tplink.Local.png) |




## Tplink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tplink
include('simpleicons-7/T/Tplink')

' renders the element
Tplink('Tplink', 'Tplink', 'an optional tech label')
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

' loads the Item which embeds the element Tplink
include('simpleicons-7/T/Tplink')

' renders the element
Tplink('Tplink', 'Tplink', 'an optional tech label')
@enduml
```

