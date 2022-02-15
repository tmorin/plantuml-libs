# Centos


```text
simpleicons-6/C/Centos
```

```text
include('simpleicons-6/C/Centos')
```



| Illustration | Centos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Centos.png) | ![illustration for Centos](../../simpleicons-6/C/Centos.Local.png) |




## Centos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Centos
include('simpleicons-6/C/Centos')

' renders the element
Centos('Centos', 'Centos', 'an optional tech label')
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

' loads the Item which embeds the element Centos
include('simpleicons-6/C/Centos')

' renders the element
Centos('Centos', 'Centos', 'an optional tech label')
@enduml
```

