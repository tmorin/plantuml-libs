# Vagrant


```text
simpleicons-7/V/Vagrant
```

```text
include('simpleicons-7/V/Vagrant')
```



| Illustration | Vagrant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vagrant.png) | ![illustration for Vagrant](../../simpleicons-7/V/Vagrant.Local.png) |




## Vagrant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vagrant
include('simpleicons-7/V/Vagrant')

' renders the element
Vagrant('Vagrant', 'Vagrant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vagrant
include('simpleicons-7/V/Vagrant')

' renders the element
Vagrant('Vagrant', 'Vagrant', 'an optional tech label', 'an optional description')
@enduml
```

