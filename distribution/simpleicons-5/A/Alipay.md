# Alipay


```text
simpleicons-5/A/Alipay
```

```text
include('simpleicons-5/A/Alipay')
```



| Illustration | Alipay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Alipay.png) | ![illustration for Alipay](../../simpleicons-5/A/Alipay.Local.png) |




## Alipay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Alipay
include('simpleicons-5/A/Alipay')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Alipay
include('simpleicons-5/A/Alipay')

' renders the element
Alipay('Alipay', 'Alipay', 'an optional tech label')
@enduml
```

