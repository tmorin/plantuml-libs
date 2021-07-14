# Huawei


```text
simpleicons-5/H/Huawei
```

```text
include('simpleicons-5/H/Huawei')
```



| Illustration | Huawei |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Huawei.png) | ![illustration for Huawei](../../simpleicons-5/H/Huawei.Local.png) |




## Huawei

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Huawei
include('simpleicons-5/H/Huawei')

' renders the element
Huawei('Huawei', 'Huawei', 'an optional tech label')
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

' loads the Item which embeds the element Huawei
include('simpleicons-5/H/Huawei')

' renders the element
Huawei('Huawei', 'Huawei', 'an optional tech label')
@enduml
```

