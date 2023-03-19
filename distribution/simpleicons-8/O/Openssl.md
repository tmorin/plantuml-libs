# Openssl


```text
simpleicons-8/O/Openssl
```

```text
include('simpleicons-8/O/Openssl')
```



| Illustration | Openssl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Openssl.png) | ![illustration for Openssl](../../simpleicons-8/O/Openssl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpensslXs>`
- `<$OpensslSm>`
- `<$OpensslMd>`
- `<$OpensslLg>`





## Openssl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Openssl
include('simpleicons-8/O/Openssl')

' renders the element
Openssl('Openssl', 'Openssl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openssl
include('simpleicons-8/O/Openssl')

' renders the element
Openssl('Openssl', 'Openssl', 'an optional tech label', 'an optional description')
@enduml
```

