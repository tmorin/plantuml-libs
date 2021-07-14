# Centos


```text
simpleicons-5/C/Centos
```

```text
include('simpleicons-5/C/Centos')
```



| Illustration | Centos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Centos.png) | ![illustration for Centos](../../simpleicons-5/C/Centos.Local.png) |




## Centos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Centos
include('simpleicons-5/C/Centos')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Centos
include('simpleicons-5/C/Centos')

' renders the element
Centos('Centos', 'Centos', 'an optional tech label')
@enduml
```

