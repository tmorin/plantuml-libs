# Subscriptions


```text
material-4/Av/Subscriptions
```

```text
include('material-4/Av/Subscriptions')
```



| Illustration | Subscriptions |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Subscriptions.png) | ![illustration for Subscriptions](../../material-4/Av/Subscriptions.Local.png) |




## Subscriptions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Subscriptions
include('material-4/Av/Subscriptions')

' renders the element
Subscriptions('Subscriptions', 'Subscriptions', 'an optional tech label')
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

' loads the Item which embeds the element Subscriptions
include('material-4/Av/Subscriptions')

' renders the element
Subscriptions('Subscriptions', 'Subscriptions', 'an optional tech label')
@enduml
```

