# Huawei


```text
simpleicons-8/H/Huawei
```

```text
include('simpleicons-8/H/Huawei')
```



| Illustration | Huawei |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Huawei.png) | ![illustration for Huawei](../../simpleicons-8/H/Huawei.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HuaweiXs>`
- `<$HuaweiSm>`
- `<$HuaweiMd>`
- `<$HuaweiLg>`





## Huawei

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Huawei
include('simpleicons-8/H/Huawei')

' renders the element
Huawei('Huawei', 'Huawei', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Huawei
include('simpleicons-8/H/Huawei')

' renders the element
Huawei('Huawei', 'Huawei', 'an optional tech label', 'an optional description')
@enduml
```

