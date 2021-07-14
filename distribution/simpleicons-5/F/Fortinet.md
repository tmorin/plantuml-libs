# Fortinet


```text
simpleicons-5/F/Fortinet
```

```text
include('simpleicons-5/F/Fortinet')
```



| Illustration | Fortinet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fortinet.png) | ![illustration for Fortinet](../../simpleicons-5/F/Fortinet.Local.png) |




## Fortinet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fortinet
include('simpleicons-5/F/Fortinet')

' renders the element
Fortinet('Fortinet', 'Fortinet', 'an optional tech label')
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

' loads the Item which embeds the element Fortinet
include('simpleicons-5/F/Fortinet')

' renders the element
Fortinet('Fortinet', 'Fortinet', 'an optional tech label')
@enduml
```

