# Amazonpay


```text
simpleicons-7/A/Amazonpay
```

```text
include('simpleicons-7/A/Amazonpay')
```



| Illustration | Amazonpay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Amazonpay.png) | ![illustration for Amazonpay](../../simpleicons-7/A/Amazonpay.Local.png) |




## Amazonpay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Amazonpay
include('simpleicons-7/A/Amazonpay')

' renders the element
Amazonpay('Amazonpay', 'Amazonpay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amazonpay
include('simpleicons-7/A/Amazonpay')

' renders the element
Amazonpay('Amazonpay', 'Amazonpay', 'an optional tech label', 'an optional description')
@enduml
```

