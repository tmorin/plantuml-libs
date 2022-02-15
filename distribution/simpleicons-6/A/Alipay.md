# Alipay


```text
simpleicons-6/A/Alipay
```

```text
include('simpleicons-6/A/Alipay')
```



| Illustration | Alipay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Alipay.png) | ![illustration for Alipay](../../simpleicons-6/A/Alipay.Local.png) |




## Alipay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Alipay
include('simpleicons-6/A/Alipay')

' renders the element
Alipay('Alipay', 'Alipay', 'an optional tech label')
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

' loads the Item which embeds the element Alipay
include('simpleicons-6/A/Alipay')

' renders the element
Alipay('Alipay', 'Alipay', 'an optional tech label')
@enduml
```

