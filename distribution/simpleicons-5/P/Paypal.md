# Paypal


```text
simpleicons-5/P/Paypal
```

```text
include('simpleicons-5/P/Paypal')
```



| Illustration | Paypal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Paypal.png) | ![illustration for Paypal](../../simpleicons-5/P/Paypal.Local.png) |




## Paypal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Paypal
include('simpleicons-5/P/Paypal')

' renders the element
Paypal('Paypal', 'Paypal', 'an optional tech label')
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

' loads the Item which embeds the element Paypal
include('simpleicons-5/P/Paypal')

' renders the element
Paypal('Paypal', 'Paypal', 'an optional tech label')
@enduml
```

