# Bt


```text
simpleicons-6/B/Bt
```

```text
include('simpleicons-6/B/Bt')
```



| Illustration | Bt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bt.png) | ![illustration for Bt](../../simpleicons-6/B/Bt.Local.png) |




## Bt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bt
include('simpleicons-6/B/Bt')

' renders the element
Bt('Bt', 'Bt', 'an optional tech label')
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

' loads the Item which embeds the element Bt
include('simpleicons-6/B/Bt')

' renders the element
Bt('Bt', 'Bt', 'an optional tech label')
@enduml
```

