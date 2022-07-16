# Picpay


```text
simpleicons-7/P/Picpay
```

```text
include('simpleicons-7/P/Picpay')
```



| Illustration | Picpay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Picpay.png) | ![illustration for Picpay](../../simpleicons-7/P/Picpay.Local.png) |




## Picpay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Picpay
include('simpleicons-7/P/Picpay')

' renders the element
Picpay('Picpay', 'Picpay', 'an optional tech label')
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

' loads the Item which embeds the element Picpay
include('simpleicons-7/P/Picpay')

' renders the element
Picpay('Picpay', 'Picpay', 'an optional tech label')
@enduml
```

