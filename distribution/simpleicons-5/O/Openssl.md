# Openssl


```text
simpleicons-5/O/Openssl
```

```text
include('simpleicons-5/O/Openssl')
```



| Illustration | Openssl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Openssl.png) | ![illustration for Openssl](../../simpleicons-5/O/Openssl.Local.png) |




## Openssl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openssl
include('simpleicons-5/O/Openssl')

' renders the element
Openssl('Openssl', 'Openssl', 'an optional tech label')
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

' loads the Item which embeds the element Openssl
include('simpleicons-5/O/Openssl')

' renders the element
Openssl('Openssl', 'Openssl', 'an optional tech label')
@enduml
```

