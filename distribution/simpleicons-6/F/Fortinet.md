# Fortinet


```text
simpleicons-6/F/Fortinet
```

```text
include('simpleicons-6/F/Fortinet')
```



| Illustration | Fortinet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fortinet.png) | ![illustration for Fortinet](../../simpleicons-6/F/Fortinet.Local.png) |




## Fortinet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fortinet
include('simpleicons-6/F/Fortinet')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fortinet
include('simpleicons-6/F/Fortinet')

' renders the element
Fortinet('Fortinet', 'Fortinet', 'an optional tech label')
@enduml
```

