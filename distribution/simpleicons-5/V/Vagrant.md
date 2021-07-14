# Vagrant


```text
simpleicons-5/V/Vagrant
```

```text
include('simpleicons-5/V/Vagrant')
```



| Illustration | Vagrant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Vagrant.png) | ![illustration for Vagrant](../../simpleicons-5/V/Vagrant.Local.png) |




## Vagrant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vagrant
include('simpleicons-5/V/Vagrant')

' renders the element
Vagrant('Vagrant', 'Vagrant', 'an optional tech label')
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

' loads the Item which embeds the element Vagrant
include('simpleicons-5/V/Vagrant')

' renders the element
Vagrant('Vagrant', 'Vagrant', 'an optional tech label')
@enduml
```

