# Amazonpay


```text
simpleicons-5/A/Amazonpay
```

```text
include('simpleicons-5/A/Amazonpay')
```



| Illustration | Amazonpay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Amazonpay.png) | ![illustration for Amazonpay](../../simpleicons-5/A/Amazonpay.Local.png) |




## Amazonpay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Amazonpay
include('simpleicons-5/A/Amazonpay')

' renders the element
Amazonpay('Amazonpay', 'Amazonpay', 'an optional tech label')
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

' loads the Item which embeds the element Amazonpay
include('simpleicons-5/A/Amazonpay')

' renders the element
Amazonpay('Amazonpay', 'Amazonpay', 'an optional tech label')
@enduml
```

