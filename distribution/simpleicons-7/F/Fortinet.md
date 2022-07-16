# Fortinet


```text
simpleicons-7/F/Fortinet
```

```text
include('simpleicons-7/F/Fortinet')
```



| Illustration | Fortinet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Fortinet.png) | ![illustration for Fortinet](../../simpleicons-7/F/Fortinet.Local.png) |




## Fortinet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fortinet
include('simpleicons-7/F/Fortinet')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fortinet
include('simpleicons-7/F/Fortinet')

' renders the element
Fortinet('Fortinet', 'Fortinet', 'an optional tech label')
@enduml
```

