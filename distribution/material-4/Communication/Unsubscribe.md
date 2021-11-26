# Unsubscribe


```text
material-4/Communication/Unsubscribe
```

```text
include('material-4/Communication/Unsubscribe')
```



| Illustration | Unsubscribe |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/Unsubscribe.png) | ![illustration for Unsubscribe](../../material-4/Communication/Unsubscribe.Local.png) |




## Unsubscribe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Unsubscribe
include('material-4/Communication/Unsubscribe')

' renders the element
Unsubscribe('Unsubscribe', 'Unsubscribe', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Unsubscribe
include('material-4/Communication/Unsubscribe')

' renders the element
Unsubscribe('Unsubscribe', 'Unsubscribe', 'an optional tech label')
@enduml
```

