# Vagrant


```text
simpleicons-6/V/Vagrant
```

```text
include('simpleicons-6/V/Vagrant')
```



| Illustration | Vagrant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vagrant.png) | ![illustration for Vagrant](../../simpleicons-6/V/Vagrant.Local.png) |




## Vagrant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vagrant
include('simpleicons-6/V/Vagrant')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vagrant
include('simpleicons-6/V/Vagrant')

' renders the element
Vagrant('Vagrant', 'Vagrant', 'an optional tech label')
@enduml
```

