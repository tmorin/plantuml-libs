# Vagrant


```text
simpleicons-14/V/Vagrant
```

```text
include('simpleicons-14/V/Vagrant')
```



| Illustration | Vagrant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vagrant.png) | ![illustration for Vagrant](../../simpleicons-14/V/Vagrant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VagrantXs>`
- `<$VagrantSm>`
- `<$VagrantMd>`
- `<$VagrantLg>`





## Vagrant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vagrant
include('simpleicons-14/V/Vagrant')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vagrant
include('simpleicons-14/V/Vagrant')

' renders the element
Vagrant('Vagrant', 'Vagrant', 'an optional tech label', 'an optional description')
@enduml
```

