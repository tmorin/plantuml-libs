# Sinaweibo


```text
simpleicons-8/S/Sinaweibo
```

```text
include('simpleicons-8/S/Sinaweibo')
```



| Illustration | Sinaweibo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sinaweibo.png) | ![illustration for Sinaweibo](../../simpleicons-8/S/Sinaweibo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SinaweiboXs>`
- `<$SinaweiboSm>`
- `<$SinaweiboMd>`
- `<$SinaweiboLg>`





## Sinaweibo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sinaweibo
include('simpleicons-8/S/Sinaweibo')

' renders the element
Sinaweibo('Sinaweibo', 'Sinaweibo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sinaweibo
include('simpleicons-8/S/Sinaweibo')

' renders the element
Sinaweibo('Sinaweibo', 'Sinaweibo', 'an optional tech label', 'an optional description')
@enduml
```

